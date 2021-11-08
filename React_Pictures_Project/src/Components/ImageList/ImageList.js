import React from 'react'

const ImageList=(props)=> {
    const images =props.images.map((image)=>{
        return <img key={image.user.id} alt="cars" src={image.urls.regular} />
    })

    return <div>{images}</div>
}

export default ImageList