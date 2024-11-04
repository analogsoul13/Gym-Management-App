import base_url from "./base_url";
import commonApi from "./commonApi";


// Trainer Registration

export const registerApi=async (data)=>{
    return await commonApi(`${base_url}/reg`,"POST","",data)
}

export const loginApi = async (data) =>{
    return await commonApi(`${base_url}/log`,"POST","",data)
}

export const addClientApi = async (data,header) =>{
    return await commonApi(`${base_url}/addclient`,"POST",header,data)
}

export const getClientsApi = async (header) =>{
    return await commonApi(`${base_url}/clients`,"GET",header,"")
}