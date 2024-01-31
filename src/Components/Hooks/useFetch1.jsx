import { useQuery } from '@tanstack/react-query'
import useAxios, { AxiosSource } from '../Axios/useAxios';

const useFetch1 = ( value1 ,datavalue) => {
    const axiosLink = useAxios(AxiosSource)
    const { isPending, isError, data, error, refetch } = useQuery({
        queryKey: [`${value1}, ${datavalue}`],
        queryFn: async () => {
            const res = await axiosLink.get(`/${value1}?data=${datavalue}`)
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

export default useFetch1;