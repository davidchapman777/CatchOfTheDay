import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
    const [fileData, setFileData] = useState()
    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0])
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append('image',fileData)
        // fetch('http://localhost:4500/single', {
        //     method: 'POST',
        //     body:data
        // })
            axios.post('http://localhost:4500/single',data)
            .then((result) => {
            console.log('file sent')
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <div>

        <form onSubmit={onSubmitHandler}>
            <input 
                type="file" 
                onChange={fileChangeHandler}
                />

            <button type='submit'>submit</button>
        </form>
                </div>
    );
}

export default UploadImage;