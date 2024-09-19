'use client'

import React from 'react'
import {  useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { LoginPayload } from '@/types'
import Link from 'next/link'
import { usePostLogin } from '@/platform-api/auth/login'
import { useRouter } from 'next/navigation'

const defaultValues = {
    username: '',
    password: ''

}

function Login() {
  const router = useRouter()
    const form  = useForm<LoginPayload>({
        defaultValues
      })

      const {mutate} = usePostLogin()

    const onSubmit = (formData: LoginPayload)=> {
      console.log(formData)
      mutate(formData, {
        onSuccess: (data: any)=> {
           const token = data?.data?.token
           localStorage.setItem('TOKEN', token)
           router.push('/')
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
          name='username'
          render={({field}) => (
            <FormItem className='w-full'>
              <FormLabel />
              <FormControl>
              <Input {...field}/>
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
              <Input type='password' {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link href='/register' className='mt-2 underline'>Register</Link>
        <Button className='w-full mt-5'>Login</Button>
        </form>
      </Form>
</div>

  )
}

export default Login
