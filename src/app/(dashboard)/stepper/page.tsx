'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import StepContent from '@mui/material/StepContent'
import Step from '@mui/material/Step'

// Third-party Imports
import { toast } from 'react-toastify'
import classNames from 'classnames'

// Component Imports
import StepperWrapper from '@core/styles/stepper'
import StepperCustomDot from '@components/stepper-dot'
import FormLayoutsBasic from '../form/page'  // Adjust the path as necessary

// Vars
const steps = [
  {
    title: 'Account Details',
    subtitle: 'Enter your Account Details',
    description: (handleNext: (data: any) => void) => <FormLayoutsBasic handleNext={handleNext} />
  },
  {
    title: 'Personal Info',
    subtitle: 'Setup Information',
    description: (formData: any) => (
      <div>
        <Typography variant='h6'>Form Data:</Typography>
        <Typography>Name: {formData?.chatbotName}</Typography>
        <Typography>Color: {formData?.chatbotColor}</Typography>
        <Typography>Position: {formData?.chatbotPosition}</Typography>
        <Typography>Greeting: {formData?.chatbotGreeting}</Typography>
      </div>
    )
  },
  {
    title: 'Social Links',
    subtitle: 'Add Social Links',
    description: 'Jelly lollipop halvah bear claw jujubes macaroon candy canes...'
  }
]

const StepperVerticalWithNumbers = () => {
  // States
  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState<any>(null)

  const handleNext = (data?: any) => {
    if (data) {
      setFormData(data)
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1)

    if (activeStep === steps.length - 1) {
      toast.success('Completed All Steps!!')
    }
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
    setFormData(null)
  }

  return (
    <Card>
      <CardHeader title='Vertical Stepper with Numbers' />
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((step, index) => (
              <Step key={index} className={classNames({ active: activeStep === index })}>
                <StepLabel StepIconComponent={StepperCustomDot}>
                  <div className='step-label'>
                    <Typography className='step-number'>{`0${index + 1}`}</Typography>
                    <div>
                      <Typography className='step-title'>{step.title}</Typography>
                      <Typography className='step-subtitle'>{step.subtitle}</Typography>
                    </div>
                  </div>
                </StepLabel>
                <StepContent>
                  {typeof step.description === 'function' ? step.description(index === 0 ? handleNext : formData) : <Typography>{step.description}</Typography>}
                  <div className='flex gap-4 mt-4'>
                    {typeof step.description !== 'function' && (
                      <Button variant='contained' onClick={() => handleNext()} size='small'>
                        {index === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    )}
                    <Button size='small' color='secondary' variant='tonal' onClick={handleBack} disabled={index === 0}>
                      Back
                    </Button>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </StepperWrapper>
        {activeStep === steps.length && (
          <div className='mt-2'>
            <Typography>All steps are completed!</Typography>
            <Button variant='contained' onClick={handleReset} size='small' className='mt-2'>
              Reset
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default StepperVerticalWithNumbers