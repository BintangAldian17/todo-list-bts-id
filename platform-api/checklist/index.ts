import { api } from "@/app/config/axios"
import { Checklist, ChecklistPayload } from "@/types"
import { useMutation, useQuery } from "@tanstack/react-query"



const postChecklist = async (payload: ChecklistPayload)=> {
    const token = localStorage.getItem('TOKEN')
    console.log(token)
    try {
        const res = await api.post('/checklist', payload, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        Promise.reject(error)
    }
}

const getAllChecklist = async ()=> {
    const token = localStorage.getItem('TOKEN')
    console.log(token)
    try {
        const res = await api.get<{data: Checklist[]}>('/checklist', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        Promise.reject(error)
    }
}
const deleteChecklist = async (id: number)=> {
    const token = localStorage.getItem('TOKEN')
    console.log(token)
    try {
        const res = await api.delete(`/checklist/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        Promise.reject(error)
    }
}

export const useGetAllChecklist = () => {
return useQuery({
    queryKey: ['checklist'],
    queryFn: getAllChecklist
})
}

export const usePostChecklist = ()=> {
    return useMutation({
        mutationFn: (payload: ChecklistPayload)=> postChecklist(payload)
    } )
}
export const useDeleteChecklist = ()=> {
    return useMutation({
        mutationFn: (id: number)=> deleteChecklist(id)
    } )
}