'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'
import FormDataDisplay from '@/@layouts/components/display/FormDataDisplay'

const FormLayoutsBasic = ({ handleNext }: { handleNext: (data: any) => void }) => {
  // States
  const [chatbotName, setChatbotName] = useState('')
  const [chatbotColor, setChatbotColor] = useState('#000000')
  const [chatbotPosition, setChatbotPosition] = useState('bottom-right')
  const [chatbotGreeting, setChatbotGreeting] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = {
      chatbotName,
      chatbotColor,
      chatbotPosition,
      chatbotGreeting,
      websiteUrl
    }
    console.log(formData)
    handleNext(formData)
  }

  return (
    <>
      <Card>
        <CardHeader title='Chatbot Configuration' />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={6} md={6} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <TextField
                  fullWidth
                  label='Name'
                  placeholder='Enter name'
                  value={chatbotName}
                  onChange={e => setChatbotName(e.target.value)}
                />
                <TextField
                  fullWidth
                  label='Enter Website URL'
                  placeholder='www.yourdomain.com'
                  value={websiteUrl}
                  onChange={e => setWebsiteUrl(e.target.value)}
                />
              </Grid>

              {/* Right Side - Greeting Message, Same Height */}
              <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  label='Initial Message'
                  placeholder='Enter inital message'
                  value={chatbotGreeting}
                  onChange={e => setChatbotGreeting(e.target.value)}
                  multiline
                  rows={4} // Adjust height to match left side
                />
              </Grid>

              <Grid item xs={6} md={6}>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <input
                    type='color'
                    value={chatbotColor}
                    onChange={e => setChatbotColor(e.target.value)}
                    style={{
                      position: 'absolute',
                      left: '12px',
                      width: '24px',
                      height: '24px',
                      border: 'none',
                      padding: '0',
                      margin: '0',
                      cursor: 'pointer',
                      opacity: 0 // Hide the color picker but keep it functional
                    }}
                  />
                  <TextField
                    fullWidth
                    label='Chatbot Color Theme'
                    placeholder='#000000'
                    value={chatbotColor}
                    onChange={e => setChatbotColor(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ style: { paddingLeft: '45px' } }} // Add padding to the left to make space for the color picker
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: '12px',
                      width: '24px',
                      height: '24px',
                      backgroundColor: chatbotColor,
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      const colorInput = document.querySelector('input[type="color"]')
                      if (colorInput) colorInput.click()
                    }} // Trigger the color picker on click
                  />
                </div>
              </Grid>
              <Grid item xs={6} md={6}>
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
              <Grid item xs={12}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant='contained' type='submit'>
                    Save
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <div className='mt-7'>
        <FormDataDisplay />
      </div>
    </>
  )
}

export default FormLayoutsBasic
