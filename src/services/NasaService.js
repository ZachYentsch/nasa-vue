import axios from 'axios'
import { AppState } from "../AppState"
import { baseURL } from '../env'


const apiKey = 'api_key=X46fexyo5gYzu6mDxzB8yGjwFUBnNjDivK4T5yXD'

const nasaApi = axios.create({
    baseURL: 'https://api.nasa.gov/planetary/apod',
    timeout: 8000
})

class NasaService {

    async searchImg(searchDate) {
        console.log('date Searched', searchDate)
        const res = await nasaApi(`?date=${searchDate}&${apiKey}`)
        console.log('date searched', res)
    }
}

export const nasaService = new NasaService()