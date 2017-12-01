/**
 * Created by nbespalov on 12.04.2017.
 */
import axios from 'axios'

const API_URL = 'http://localhost:3004/'

export const categories = () => axios.get(`${API_URL}categories`)

export const category = () => axios.get(`${API_URL}category`)

