import { BASE_URL } from "./baseUrl"
import { commonAPI } from "./commonAPI"


// request to register user
export const registerAPI=async(reqBody)=>{
     return await commonAPI('POST',`${BASE_URL}/user/register`,reqBody,"")
}
export const loginAPI=async(reqBody)=>{
     return   await commonAPI('POST',`${BASE_URL}/user/login`,reqBody,"")
}
export const postJobAPI = async (reqBody) => {
     return await commonAPI('POST', `${BASE_URL}/job/post-job`, reqBody, "");
}