import React, { useState } from 'react'
import { Typography, Grid, Box, Paper, IconButton } from '@mui/material'
import { color, styled } from '@mui/system'
import FileCopyIcon from '@mui/icons-material/FileCopy'

const DataItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: '8px 0',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden'
}))

const FullDetails = styled(Typography)(({ theme }) => ({
  wordWrap: 'break-word',
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  fontSize: '1.1rem' // Increased font size for better readability
}))

const FormDataDisplay: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopiedText(text) // Update state to show 'Copied' message
        setTimeout(() => setCopiedText(null), 2000) // Reset after 2 seconds
      },
      () => {
        alert('Failed to copy!')
      }
    )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant='h6' gutterBottom>
        Chatbot Setup Instructions
      </Typography>
      <Grid container spacing={2}>
        {/* Step 1: Copy the following files */}
        <Grid item xs={12} sm={12} md={12}>
          <DataItem>
            <Typography variant='h5' gutterBottom className='mb-4'>
              Step 1: Copy the following files
            </Typography>
            <FullDetails variant='body2'>
              CSS File (CDN link type to be pasted in header):
              <div className='flex items-center space-x-2 my-2'>
                <code>
                  <pre className='m-0 p-2 flex-1 bg-[#7367F0] bg-opacity-60 text-white backdrop-blur-md'>
                    {`<link rel="stylesheet" href="https://example.com/your-stylesheet.css">`}
                  </pre>
                </code>
                <IconButton
                  onClick={() => handleCopy('<link rel="stylesheet" href="https://example.com/your-stylesheet.css">')}
                >
                  {copiedText === '<link rel="stylesheet" href="https://example.com/your-stylesheet.css">' ? 'Copied' : <FileCopyIcon />}
                </IconButton>
              </div>

              JS File (Script to be pasted in footer):
              <div className='flex items-center space-x-2 my-2'>
                <code>
                  <pre className='m-0 p-2 flex-1 bg-[#7367F0] bg-opacity-60 text-white backdrop-blur-md'>
                    {`<script src="https://example.com/your-script.js"></script>`}
                  </pre>
                </code>
                <IconButton
                  onClick={() => handleCopy('<script src="https://example.com/your-script.js"></script>')}
                >
                  {copiedText === '<script src="https://example.com/your-script.js"></script>' ? 'Copied' : <FileCopyIcon />}
                </IconButton>
              </div>
            </FullDetails>
          </DataItem>
        </Grid>

        {/* Step 2: Paste these files in your header and footer */}
        <Grid item xs={12} sm={12} md={12}>
          <DataItem>
            <Typography variant='h5' gutterBottom className='mb-4'>
              Step 2: Paste these files in your header and footer
            </Typography>
            <FullDetails variant='body2'>
              - Paste the CSS file link inside the <code className='m-0 p-2 flex-1 bg-[#7367F0] bg-opacity-60 text-white backdrop-blur-md'>&lt;head&gt;</code> section.
              <br></br>
              <br />- Paste the JS script inside the <code className='m-0 p-2 flex-1 bg-[#7367F0] bg-opacity-60 text-white backdrop-blur-md'>&lt;footer&gt;</code> section.
            </FullDetails>
          </DataItem>
        </Grid>

        {/* Step 3: Create the div element */}
        <Grid item xs={12} sm={12} md={12}>
          <DataItem>
            <Typography variant='h5' gutterBottom>
              Step 3: Create the div element with id="OutreachChatbot"
            </Typography>
            <FullDetails variant='body2'>
              Insert the following div tag where you want the chatbot to appear:
              <div className='flex items-center space-x-2 my-2'>
              <code className='text-[#7367F0]'>
  <pre className='m-0 p-2 flex-1 bg-[#7367F0] bg-opacity-60 text-white backdrop-blur-md'>
    {`<div id="OutreachChatbot"></div>`}
  </pre>
</code>

                <IconButton
                  onClick={() => handleCopy('<div id="OutreachChatbot"></div>')}
                >
                  {copiedText === '<div id="OutreachChatbot"></div>' ? 'Copied' : <FileCopyIcon />}
                </IconButton>
              </div>
            </FullDetails>
          </DataItem>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FormDataDisplay
