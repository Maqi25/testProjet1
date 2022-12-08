import axios from "axios"
import { get } from "mongoose"

const options = {
    method: 'GET', 
    url: 'https://jsonplaceholder.typicode.com/posts',
    headers: {
        ContentType: 'application/json'
    }
}

const getPost = async ()=>{
    try {
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.log(error)
    }
    
}

export default { getPost}