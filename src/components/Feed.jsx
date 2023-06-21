
import React from 'react'
import Post from './Post'
import { Box } from '@mui/material'

const Feed = () => {
  return (
    <Box flex={3}  justifyContent={'center'}
    width={'100%'}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  )
}

export default Feed