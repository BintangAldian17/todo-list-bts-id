'use client'

import React from 'react'
import {  useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {  RegisterPayload } from '@/types'
import { usePostRegister } from '@/platform-api/auth/register'

const defaultValues = {
    username: '',
    password: '',
    email: ''

}

function Register() {
    const form  = useForm<RegisterPayload>({
        defaultValues
      })

    const {mutate} = usePostRegister()
    const onSubmit = (formData: RegisterPayload)=> {
      console.log(formData)
      mutate(formData, {
        onSuccess: ()=> {
          console.log('SUCCESS')
        },
        onError: (err)=> {
          console.log('ERR', err)
        }
      })
    }

  return (
    <div className='w-full h-full flex items-center justify-center flex-col'>
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <FormField
          control={form.control}
          name='email'
          render={({field}) => (
            <FormItem className='w-full'>
              <FormLabel />
              <FormControl>
              <Input type='email' {...field} placeholder='Email'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='username'
          render={({field}) => (
            <FormItem className='w-full'>
              <FormLabel />
              <FormControl>
              <Input {...field} placeholder='User Name'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({field}) => (
            <FormItem className='w-full'>
              <FormLabel />
              <FormControl>
              <Input type='password' {...field} placeholder='Password'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full mt-5'>Register</Button>
        </form>
      </Form>
</div>

  )
}

export default Register
