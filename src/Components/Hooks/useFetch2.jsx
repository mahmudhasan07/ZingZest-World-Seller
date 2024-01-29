import React from 'react';
import { useQuery } from '@tanstack/react-query'
import useAxios, { AxiosSource } from '../Axios/useAxios';

const useFetch2 = (value1,value2) => {
    const axiosLink = useAxios(AxiosSource)
    const { isPending, isError, data, error, refetch } = useQuery({
        queryKey: [`${value1}, ${value2}`],
        queryFn: async () => {
            const res = await axiosLink.get(`/${value1}/${value2}`)
            return res.data
        }
    })

    if (isPending) {
        return "loading..."
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return [data, refetch]
};

export default useFetch2;