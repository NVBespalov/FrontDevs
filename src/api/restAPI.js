/**
 * Created by nbespalov on 12.04.2017.
 */
import axios from 'axios'

const API_URL = 'http://localhost:3004/'

export const categories = params => axios.get(`${API_URL}categories`, { params })

export const products = params => axios.get(`${API_URL}products`, { params })

