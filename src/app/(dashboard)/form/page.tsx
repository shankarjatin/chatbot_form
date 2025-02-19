'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'

const FormLayoutsBasic = ({ handleNext }: { handleNext: (data: any) => void }) => {
  // States
  const [chatbotName, setChatbotName] = useState('')
  const [chatbotColor, setChatbotColor] = useState('#000000')
  const [chatbotPosition, setChatbotPosition] = useState('bottom-right')
  const [chatbotGreeting, setChatbotGreeting] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = {
      chatbotName,
      chatbotColor,
      chatbotPosition,
      chatbotGreeting
    }
    console.log(formData)
    handleNext(formData)
  }

  return (
    <Card>
      <CardHeader title='Chatbot Configuration' />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type='color'
                label='Chatbot Color Theme'
                value={chatbotColor}
                onChange={e => setChatbotColor(e.target.value)}
                InputLabelProps={{ shrink: true }}
                inputProps={{ style: { width: '60px', height: '60px' } }} // Adjusting the width of the color picker
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Chatbot Name'
                placeholder='Enter chatbot name'
                value={chatbotName}
                onChange={e => setChatbotName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label='Chatbot Position'
                value={chatbotPosition}
                onChange={e => setChatbotPosition(e.target.value)}
              >
                <MenuItem value='top-left'>Top Left</MenuItem>
                <MenuItem value='top-right'>Top Right</MenuItem>
                <MenuItem value='bottom-left'>Bottom Left</MenuItem>
                <MenuItem value='bottom-right'>Bottom Right</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Chatbot Greeting Message'
                placeholder='Enter greeting message'
                value={chatbotGreeting}
                onChange={e => setChatbotGreeting(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <div className='flex items-center justify-between flex-wrap gap-5'>
                <Button variant='contained' type='submit'>
                  Get Started!
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsBasic