import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import { Box } from './styles'

export const Loader = () => (
  <Box>
    <TailSpin height='50' width='50' color='orange' />
  </Box>
)
