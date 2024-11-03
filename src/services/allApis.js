import base_url from "./base_url";
import commonApi from "./commonApi";


// Trainer Registration

export const registerApi=async (data)=>{
    return await commonApi(`${base_url}/reg`,"POST","",data)
}