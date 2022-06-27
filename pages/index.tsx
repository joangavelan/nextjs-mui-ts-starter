import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import { Box, Button, TextField, Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Container maxWidth='lg'>
      <Box>
        <Typography variant='h4'>Hello Next.js</Typography>
        <TextField label='Hello' />
        <Button variant='contained' color='primary'>
          Click me
        </Button>
        <Typography variant='body1'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          explicabo, ex dicta doloribus architecto consectetur velit corporis
          aliquam, nihil iusto, sit odit corrupti! Nesciunt adipisci provident
          consequatur eos non magnam.
        </Typography>
        <Typography variant='body2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          dolorum odit rerum nam doloremque doloribus corrupti minima, natus
          architecto inventore distinctio odio eos recusandae fugiat quidem
          soluta nulla explicabo repellendus!
        </Typography>
      </Box>
    </Container>
  )
}

export default Home
