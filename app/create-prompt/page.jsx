'use client'

import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import Form from '../../components/Form'
import { set } from 'mongoose'

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    prompt: '',
    tag: ''
  })

  const createPrompt = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const response = await fetch('/api/prompt/new', 
      {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: sesson?.user.id,
          tag: post.tag
        })

      })
      if (response.ok) {
        router.push('/')
      }
    } catch(error) {
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
      />
  )
}

export default CreatePrompt