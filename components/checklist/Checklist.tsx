'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useGetAllChecklist, usePostChecklist } from '@/platform-api/checklist'
import ChecklistItem from './ChecklistItem'
import { useQueryClient } from '@tanstack/react-query'

function Checklist() {
    const [isAddMode, setIsAddMode] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const {mutate, isPending} = usePostChecklist()
    const queryClient = useQueryClient()

    const handleClick = ()=> {
        if(!inputValue) return
        mutate({name: inputValue}, {
            onSuccess: ()=> {
              queryClient.invalidateQueries({
                queryKey: ['checklist']
              })
            },
            onError: (err)=> console.log('ERR', err),
        })
        setInputValue('')
    }
const {data} = useGetAllChecklist()

const checklistData = data && data.data

  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='w-72'>
    <ul className='flex flex-col gap-y-5'>
      {checklistData.map(item => (
          <ChecklistItem checkListItem={item} key={item.id} />
      ))}
    </ul>
        {isAddMode && 
        <div className='flex mt-3'>
        <Input className='w-full' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
        <Button disabled={isPending} onClick={handleClick}>+</Button>
        </div>
        }
        <Button className='w-full mt-5' onClick={()=> setIsAddMode(!isAddMode)}>{isAddMode ? 'Cancel': 'Add'} </Button>
        </div>
    </div>
  )
}

export default Checklist
