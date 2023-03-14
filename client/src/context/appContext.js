import React, { useContext, useReducer } from "react";
import reducer from "./app_reducer";
import axios from "axios";
import { 
    CLEAR_ALERT,
    DISPLAY_ALERT,
    // REGISTER_USER_BEGIN,
    // REGISTER_USER_SUCCESS,
    // REGISTER_USER_ERROR,
    // LOGIN_USER_BEGIN,
    // LOGIN_USER_SUCCESS,
    // LOGIN_USER_ERROR,
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    HANDLE_CHANGE,
    CLEAR_VALUES,
    CREATE_POST_BEGIN,
    CREATE_POST_SUCCESS,
    CREATE_POST_ERROR,
    GET_POSTS_BEGIN,
    GET_POSTS_SUCCESS,
    SET_EDIT_POST,
    DELETE_POST_BEGIN,
    EDIT_POST_BEGIN,
    EDIT_POST_SUCCESS,
    EDIT_POST_ERROR,
    SHOW_STATS_BEGIN,
    SHOW_STATS_SUCCESS,
    CLEAR_FILTERS,
    CHANGE_PAGE,
    UPLOAD_IMAGE_BEGIN,
    UPLOAD_IMAGE_SUCCESS,
    UPLOAD_IMAGE_ERROR

} from './actions'

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const userLocation = localStorage.getItem('location');

export const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user):null,
    token: token,
    userLocation: userLocation || '',
    catchLocation: userLocation || '',
    showSidebar: false,
    isEditing: false,
    editPostId: '',
    title: '',
    content: '',
    image: '',
    fishTypeOptions: ['bass', 'trout', 'catfish', 'salmon', 'freshwater', 'saltwater'],
    fishType: 'bass',
    fishSizeOptions: ['1lb', '2lb', '3lb', '4lb', '5lb', '6lb', '7lb', '8lb', '9lb', '10lb', '11lb', '12lb', '13lb', '14lb'],
    fishSize: '1lb',
    posts: [],
    totalPosts: 1,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyCatches: [],
    search: '',
    searchFishType: 'all',
    searchFishSize: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
    profileImage:''
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const authFetch = axios.create({
        baseURL: '/api/v1',
    })
    authFetch.interceptors.request.use((config) => {
        config.headers['Authorization'] = `Bearer ${state.token}`
        return config
    }, (error) => {
        return Promise.reject(error)
    })
    authFetch.interceptors.response.use((response) => {
        return response
    }, (error) => {
        // console.log(error.response)
        if (error.response.status === 401) {
            setTimeout(() => {
                logoutUser()
            },3000)
        }
        return Promise.reject(error)
    })

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT })
        clearAlert()
    }
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({type:CLEAR_ALERT})
        },3000)
    }
    const addUserToLocalStorage = ({ user, token, location }) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        localStorage.setItem('location',location)
    }
    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('location')
    }
    // const registerUser = async (currentUser) => {
    //     dispatch({ type: REGISTER_USER_BEGIN })
    //     try {
    //         const response = await axios.post('/api/v1/auth/register', currentUser)
    //         console.log(response)
    //         const { user, token, location } = response.data;
    //         dispatch({ type: REGISTER_USER_SUCCESS, payload: { user, token, location }, })
    //         addUserToLocalStorage({user, token, location})
    //     } catch (error) {
    //         console.log(error.response)
    //         dispatch({type:REGISTER_USER_ERROR,payload:{msg:error.response.data.msg}})
    //     }
    //     clearAlert()
    // }

    // const loginUser = async (currentUser) => {
    //     dispatch({ type: LOGIN_USER_BEGIN })
    //     try {
    //         const {data} = await axios.post('/api/v1/auth/login', currentUser)
    //         const { user, token, location } = data;
    //         dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, token, location }, })
    //         addUserToLocalStorage({user, token, location})
    //     } catch (error) {
    //         dispatch({type:LOGIN_USER_ERROR,payload:{msg:error.response.data.msg}})
    //     }
    //     clearAlert()
    // }
    const setupUser = async ({currentUser, endPoint, alertText}) => {
        dispatch({ type: SETUP_USER_BEGIN })
        try {              
            const {data} = await axios.post(`/api/v1/auth/${endPoint}`, currentUser)
            const { user, token, location } = data;
            dispatch({ type: SETUP_USER_SUCCESS, payload: { user, token, location ,alertText}, })
            addUserToLocalStorage({user, token, location})
        } catch (error) {
            dispatch({type:SETUP_USER_ERROR,payload:{msg:error.response.data.msg}})
        }
        clearAlert()
    }
    const toggleSidebar = () => {
        dispatch({type:TOGGLE_SIDEBAR})
    }
    const logoutUser = () => {
        dispatch({ type: LOGOUT_USER })
        removeUserFromLocalStorage()
    }
    const updateUser = async (currentUser) => {
        dispatch({type:UPDATE_USER_BEGIN})
        try {
            const { data } = await authFetch.patch('/auth/updateUser', currentUser)
            const { user, location, token } = data
            dispatch({ type: UPDATE_USER_SUCCESS, payload: { user, location, token } })
            addUserToLocalStorage({user, location, token})
        } catch (error) {
            if (error.response.status !== 401) {
                dispatch({type:UPDATE_USER_ERROR, payload:{msg:error.response.data.msg}})
            }
        }
        clearAlert()
    }

    const handleChange = async ({ name, value }) => {
        dispatch({type:HANDLE_CHANGE,payload:{name, value}})
    }
    const clearValues = () => {
        dispatch({type:CLEAR_VALUES})
    }
    let imageValue=''
    const createPost = async () => {
        dispatch({ type: CREATE_POST_BEGIN })
        try {
            let { title, content, image, catchLocation, fishType, fishSize } = state;
            if (image) {
                const formData = new FormData();
                formData.append('image', image)
                const {data:{image:{src}}} = await authFetch.post('/posts/uploads',formData,{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                })
                imageValue = src 
            }
                await authFetch.post('/posts', {
                    title, 
                    content,
                    catchLocation,
                    image:imageValue,
                    fishType,
                    fishSize
                })
                dispatch({ type: CREATE_POST_SUCCESS})
            
            dispatch({type:CLEAR_VALUES})
        } catch (error) {
            if (error.response.status === 401)
            return
            dispatch({type:CREATE_POST_ERROR,payload:{msg:error.response.data.msg}})
        }
        clearAlert()
    }    
    
    const getPosts = async () => {
        const { page, search, searchFishType, searchFishSize, sort }=state
        let url = `/posts?page=${page}&fishType=${searchFishType}&fishSize=${searchFishSize}&sort=${sort}`
        if (search) {
            url=url + `&search=${search}`
        }
        dispatch({ type: GET_POSTS_BEGIN })
        try {
            const { data } = await authFetch.get(url)
            const { posts, totalPosts, numOfPages } = data
            dispatch({type:GET_POSTS_SUCCESS,payload:{posts, totalPosts, numOfPages}})
        } catch (error) {
            logoutUser()
        }
        clearAlert()
    }
    const setEditPost = (id) => {
        dispatch({type:SET_EDIT_POST, payload:{id}})
    }
    const editPost = async() => {
        dispatch({ type: EDIT_POST_BEGIN })
        try {
            const { title, content,image, catchLocation, fishSize, fishType } = state
            await authFetch.patch(`/posts/${state.editPostId}`, {
                title, content, image, catchLocation, fishSize, fishType
            })
            dispatch({type:EDIT_POST_SUCCESS})
            dispatch({type:CLEAR_VALUES})
        } catch (error) {
            if (error.response.status === 401) return;
            dispatch({type:EDIT_POST_ERROR, payload:{msg:error.response.data.msg}})
        }
        clearAlert()
    }
    const deletePost = async(postId) => {
        dispatch({ type: DELETE_POST_BEGIN })
        try {
            await authFetch.delete(`/posts/${postId}`)
            getPosts()
        } catch (error) {
            logoutUser()
        }
    }
    const showStats = async () => {
        dispatch({ type: SHOW_STATS_BEGIN })
        try {
            const { data } = await authFetch('/posts/stats')
            const stats = data.defaultStats
            const monthlyCatches=data.monthlyCatches
            dispatch({type: SHOW_STATS_SUCCESS,payload: {stats,monthlyCatches}})
        } catch (error) {
            logoutUser()
        }
    }
    const clearFilters = () => {
        dispatch({type:CLEAR_FILTERS})
    }
    const changePage = (page) => {
        dispatch({type:CHANGE_PAGE,payload:{page}})
    }

    return <AppContext.Provider value={{
        ...state,
        displayAlert,
        // registerUser,
        // loginUser,
        setupUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        handleChange,
        clearValues,
        createPost,
        getPosts,
        setEditPost,
        deletePost,
        editPost,
        showStats,
        clearFilters,
        changePage,
        authFetch
    }}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}
export{AppProvider}