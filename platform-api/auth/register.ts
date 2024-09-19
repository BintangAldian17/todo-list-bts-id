import { api } from "@/app/config/axios"
import {  RegisterPayload } from "@/types"
import { useMutation } from "@tanstack/react-query"

const register = async (payload: RegisterPayload): Promise<any>=> {
    try {
        const res = await api.post('/register', payload)
        return res.data
    } catch (error) {
        Promise.reject(error)
    }
}

export const usePostRegister = ()=> {
    return useMutation({
        mutationFn: (payload: RegisterPayload)=> {
            return register(payload)
        }
    })
}

// export function useRemoveAgentEstimate() {
//     return useMutation<AgentEstimateResponse, Error, AgentEstimateRemovePayload>(
//       (payload: AgentEstimateRemovePayload) => removeAgentEstimate(payload),
//     );
//   }