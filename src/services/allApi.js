import { commonApi } from "./commonstructure";
import { BASE_URL } from "./baseUrl";


// api for add video

export const AddVideos=async (body)=>{
    return await commonApi('POST',`${BASE_URL}/videos`,body)

}

// api for get videos
export const getVideos=async ()=>{
    return await commonApi('GET',`${BASE_URL}/videos`,{})
}

// api for delete video
export const removeVideo=async (id)=>{
    return await commonApi('DELETE',`${BASE_URL}/videos/${id}`,{})
}

// api for add catagory
export const AddCatagories=async (body)=>{
    return await commonApi('POST',`${BASE_URL}/catagories`,body)

}

// api for get catagories
export const getCatagories=async ()=>{
    return await commonApi('GET',`${BASE_URL}/catagories`,{})
}

// api for delete catagory
export const removeCategory=async (id)=>{
    return await commonApi('DELETE',`${BASE_URL}/catagories/${id}`,{})
}

// api fro watch history
export const watchHisoty=async(body)=>{
    return await commonApi('POST',`${BASE_URL}/histories`,body)
}

// api fro getting watch history
export const viewHistory=async()=>{
    return await commonApi('GET',`${BASE_URL}/histories`,{})
}

// api fro delete history
export const removeHistory=async (id)=>{
    return await commonApi('DELETE',`${BASE_URL}/histories/${id}`,{})
}

// api for single video
export const getVideo=async(id)=>{
    return await commonApi('GET',`${BASE_URL}/videos/${id}`)
}

// api for update category
export const updateCatagories = async (id, body) => {
    return await commonApi("PUT", `${BASE_URL}/catagories/${id}`, body);
    };

    // api for single category
export const getSingleCat=async(id)=>{
    return await commonApi('GET',`${BASE_URL}/catagories/${id}`)
}
