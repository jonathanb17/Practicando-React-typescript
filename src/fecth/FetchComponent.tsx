import React, { useEffect, useState } from 'react'

const FetchComponent = () => {


interface Photos{
    "albumId": string,
    "id": number,
    "title": string,
    "url": string,
    "thumbnailUrl": string
}

const [photos, setphotos] = useState<Photos[]>([])

useEffect(() => {
    const getPhotos=async()=>{
        const res= await fetch('https://jsonplaceholder.typicode.com/photos');
        const data =  await res.json()
        setphotos(data)
    }
    getPhotos()
}, [])


    return (
        <div>
            {
                photos.map(photo=>(
                    <div key={photo.id}  style={{width:'33%',border:'1px solid #000',display:'inline-block'}}>
                        <h1>{photo.title}</h1>
                        <img src={photo.thumbnailUrl} alt=""/>
                    </div>
                ))
            }
        </div>
    )
}

export default FetchComponent
