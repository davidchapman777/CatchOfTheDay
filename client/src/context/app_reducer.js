import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
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
    
} from "./actions"
import { initialState }from './appContext'


const app_reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText:'Please provide all values!'
        }
    }
    if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertType: '',
            alertText:'',
        }
    }
    // if (action.type === REGISTER_USER_BEGIN) {
    //     return {
    //         ...state,
    //         isLoading:true
    //     }
    // }
    // if (action.type === REGISTER_USER_SUCCESS) {
    //     return {
    //         ...state,
    //         isLoading: false,
    //         token: action.payload.token,
    //         user: action.payload.user,
    //         userLocation: action.payload.location,
    //         jobLocation: action.payload.location,
    //         showAlert: true,
    //         alertType: 'success',
    //         alertText:'User Created! Redirecting...'
    //     }
    // }
    // if (action.type === REGISTER_USER_ERROR) {
    //     return {
    //         ...state,
    //         isLoading: false,
    //         showAlert: true,
    //         alertType: 'danger',
    //         alertText:action.payload.msg
    //     }
    // }
    // if (action.type === LOGIN_USER_BEGIN) {
    //     return {
    //         ...state,
    //         isLoading:true
    //     }
    // }
    // if (action.type === LOGIN_USER_SUCCESS) {
    //     return {
    //         ...state,
    //         isLoading: false,
    //         token: action.payload.token,
    //         user: action.payload.user,
    //         userLocation: action.payload.location,
    //         jobLocation: action.payload.location,
    //         showAlert: true,
    //         alertType: 'success',
    //         alertText:'Login successful! Redirecting...'
    //     }
    // }
    // if (action.type === LOGIN_USER_ERROR) {
    //     return {
    //         ...state,
    //         isLoading: false,
    //         showAlert: true,
    //         alertType: 'danger',
    //         alertText:action.payload.msg
    //     }
    // }
    if (action.type === SETUP_USER_BEGIN) {
        return {
            ...state,
            isLoading:true
        }
    }
    if (action.type === SETUP_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            token: action.payload.token,
            user: action.payload.user,
            userLocation: action.payload.location,
            postLocation: action.payload.location,
            showAlert: true,
            alertType: 'success',
            alertText:action.payload.alertText
        }
    }
    if (action.type === SETUP_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText:action.payload.msg
        }
    }
    if (action.type === TOGGLE_SIDEBAR) {
        return {
            ...state,
            showSidebar:!state.showSidebar
        }
    }
    if (action.type === LOGOUT_USER) {
        return {
            ...initialState,
            user: null,
            token: null,
            userLocation: '',
            postLocation:''
        }
    }
    if (action.type === UPDATE_USER_BEGIN) {
        return {
            ...state,
            isLoading:true
        }
    }
    if (action.type === UPDATE_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            token: action.payload.token,
            user: action.payload.user,
            userLocation: action.payload.location,
            postLocation: action.payload.location,
            showAlert: true,
            alertType: 'success',
            alertText:'User profile updated!'
        }
    }
    if (action.type === UPDATE_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText:action.payload.msg
        }
    }
    
    if (action.type === HANDLE_CHANGE) {
        return {
            ...state,
            page:1,
            [action.payload.name]:action.payload.value
        }
    }
    
    if (action.type === CLEAR_VALUES) {
        const initialState = {
            isEditing: false,
            editJobId: '',
            title: '',
            content: '',
            image:'',
            fishType: 'bass',
            fishSize: '1lb',
            catchLocation: state.userLocation,
        }
        return {
            ...state,
            ...initialState
        }
    }
    if (action.type === CREATE_POST_BEGIN) {
        return {
            ...state,
            isLoading:true,
        }
    }
    if (action.type === CREATE_POST_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'New post created!',
        }
    }
    if (action.type === CREATE_POST_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText:action.payload.msg
        }
    }
    if (action.type === GET_POSTS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert:'false'
        }
    }
    if (action.type === GET_POSTS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            posts: action.payload.posts,
            totalPosts: action.payload.totalPosts,
            numOfPages:action.payload.numOfPages
        }
    }
    if (action.type === SET_EDIT_POST) {
        const post = state.posts.find((post) => post._id === action.payload.id)
        const { _id, title, content, image, catchLocation, fishSize, fishType } = post;
        return {
            ...state,
            isEditing: true, 
            editPostId: _id,
            title,
            image,
            content,
            catchLocation,
            fishSize,
            fishType,
        }
    }
    if (action.type === DELETE_POST_BEGIN) {
        return {
            ...state,
            isLoading:true,
        }
    }
    if (action.type === EDIT_POST_BEGIN) {
        return {
            ...state,
            isLoading:true
        }
    }
    if (action.type === EDIT_POST_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText:'post updated'
        }
    }
    if (action.type === EDIT_POST_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText:action.payload.msg
        }
    }
    if (action.type === SHOW_STATS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false,
        }
    }
    if (action.type === SHOW_STATS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            stats: action.payload.stats,
            monthlyCatches:action.payload.monthlyCatches
        }
    }
    if (action.type === CLEAR_FILTERS) {
        return {
            ...state,
            search: '',
            searchFishType: 'all',
            searchFishSize: 'all',
            sort: 'latest',
        }
    }
    if (action.type === CHANGE_PAGE) {
        return {
            ...state,
            page:action.payload.page
        }
    }
    throw new Error (`no such action :${action.type}`)
}
export default app_reducer