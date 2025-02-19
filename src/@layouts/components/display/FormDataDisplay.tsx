// components/FormDataDisplay.tsx

import React from 'react';
import { Typography, Button, Grid, Link, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Styling for each data item
const DataItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: '8px 0',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '110px', // Set a consistent height for each box
  overflow: 'hidden', // Prevent content from overflowing
}));

const FullDetails = styled(Typography)(({ theme }) => ({
  wordWrap: 'break-word',
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
}));

interface FormDataProps {
  formData: {
    chatbotName?: string;
    chatbotColor?: string;
    chatbotPosition?: string;
    chatbotGreeting?: string;
  };
}

const FormDataDisplay: React.FC<FormDataProps> = ({ formData }) => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }, () => {
      alert('Failed to copy!');
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h6" gutterBottom>Form Data:</Typography>
      <Grid container spacing={2}>
        {Object.entries(formData).map(([key, value]) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <DataItem>
              <Typography variant="subtitle1" gutterBottom>
                {key.charAt(0).toUpperCase() + key.slice(1)}:
              </Typography>
              <FullDetails variant="body2">
                {value}
              </FullDetails>
              <Button variant="outlined" onClick={() => handleCopy(value)}>
                Copy {key.charAt(0).toUpperCase() + key.slice(1)}
              </Button>
            </DataItem>
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4}>
          <DataItem>
            <Typography variant="subtitle1" gutterBottom>Learn More</Typography>
            <Link href="https://example.com" target="_blank" style={{ marginBottom: 'auto' }}>
              More details
            </Link>
          </DataItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DataItem>
            <Typography variant="subtitle1" gutterBottom>Sample JavaScript Code</Typography>
            <FullDetails variant="body2">
              {`function greet() { console.log("Hello, World!"); }`}
            </FullDetails>
            <Button variant="outlined" onClick={() => handleCopy(`function greet() { console.log("Hello, World!"); }`)}>
              Copy Code
            </Button>
          </DataItem>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormDataDisplay;
