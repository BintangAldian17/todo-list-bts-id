'use client'

import { cn } from '@/lib/utils'
import { Checklist } from '@/types'
import React, { useState } from 'react'
import {Trash} from 'lucide-react'
import { useDeleteChecklist } from '@/platform-api/checklist'
import { useQueryClient } from '@tanstack/react-query'


function ChecklistItem({checkListItem}: {checkListItem: Checklist}) {
    const [isComplete,setIsComplete] = useState(checkListItem.checklistCompletionStatus)

    const queryClient = useQueryClient()
    const {mutate} = useDeleteChecklist()
    const handleRemove = ()=> {
        mutate(checkListItem.id, {
            onSuccess: ()=> {
                queryClient.invalidateQueries({
                    queryKey: ['checklist']
                })
            }
        })
    }
  return (
     <li className='flex items-center gap-x-3 flex-wrap'>
        <button onClick={()=> setIsComplete(!isComplete)} className='rounded-full border size-5 flex items-center justify-center'>
            {isComplete && <div className='size-3 bg-primary rounded-full'/>}
        </button>
         <span className={cn( isComplete && 'line-through')}>{checkListItem.name}</span>
         <Trash onClick={handleRemove} className='ml-auto text-red-500' size={18}/>
    </li>

  )
}

export default ChecklistItem
