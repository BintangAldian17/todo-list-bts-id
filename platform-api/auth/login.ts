import { api } from "@/app/config/axios"
import { LoginPayload } from "@/types"
import { useMutation } from "@tanstack/react-query"

const login = async (payload: LoginPayload)=> {
    try {
        const res = await api.post('/login', payload)
        return res.data
    } catch (error) {
        Promise.reject(error)
    }
}

export const usePostLogin = ()=> {
    return useMutation({
        mutationFn: (payload: LoginPayload)=> login(payload)
    } )
}