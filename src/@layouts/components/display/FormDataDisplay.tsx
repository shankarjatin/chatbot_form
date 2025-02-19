// components/FormDataDisplay.tsx

import React from 'react';
import { Typography } from '@mui/material';

interface FormDataProps {
  formData: {
    chatbotName?: string;
    chatbotColor?: string;
    chatbotPosition?: string;
    chatbotGreeting?: string;
  };
}

const FormDataDisplay: React.FC<FormDataProps> = ({ formData }) => {
  return (
    <div>
      <Typography variant="h6">Form Data:</Typography>
      <Typography>Name: {formData.chatbotName}</Typography>
      <Typography>Color: {formData.chatbotColor}</Typography>
      <Typography>Position: {formData.chatbotPosition}</Typography>
      <Typography>Greeting: {formData.chatbotGreeting}</Typography>
    </div>
  );
};

export default FormDataDisplay;
