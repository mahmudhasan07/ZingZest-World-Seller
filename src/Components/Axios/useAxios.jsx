/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from 'react';
import axios from "axios"

export const AxiosSource = axios.create({
    baseURL : 'http://localhost:2000'
})

const useAxios = () => {
    return AxiosSource
};


export default useAxios;