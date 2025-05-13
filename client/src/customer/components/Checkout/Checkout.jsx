import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderSummary from './OrderSummary';
import Delivery from './Delivery';

function getSteps() {
    return ['Login', 'Add delivery address', 'Order summary', 'Payment method'];
}

export default function Checkout() {
    const steps = getSteps();
    const location = useLocation();
    const navigate = useNavigate();
    const querySearch = new URLSearchParams(location.search);

    const stepFromQuery = parseInt(querySearch.get('step') ?? '0');
    const initialStep =
        stepFromQuery >= 1 && stepFromQuery <= steps.length ? stepFromQuery : 1;

    const [activeStep, setActiveStep] = React.useState(initialStep);

    React.useEffect(() => {
        if (activeStep >= 1 && activeStep <= steps.length) {
            const newQuery = new URLSearchParams(location.search);
            newQuery.set('step', activeStep.toString());
            navigate(`${location.pathname}?${newQuery.toString()}`, { replace: true });
        } else if (activeStep === steps.length + 1) {
            const newQuery = new URLSearchParams(location.search);
            newQuery.delete('step');
            navigate(
                `${location.pathname}${newQuery.toString() ? `?${newQuery.toString()}` : ''}`,
                { replace: true }
            );
        }
    }, [activeStep, steps.length, location.search, location.pathname, navigate]);

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    return (
        <div className="min-h-screen flex flex-col pt-28">
            <div className="flex-grow px-4 sm:px-8 lg:px-20">
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep - 1}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <Box sx={{ mt: 4 }}>
                        {activeStep > steps.length ? (
                            <Typography sx={{ mt: 2, mb: 2 }}>
                                TẤT CẢ CÁC BƯỚC ĐÃ HOÀN THÀNH
                            </Typography>
                        ) : (
                            <>
                                <div className="my-6">
                                    {activeStep === 2 ? <Delivery /> : <OrderSummary />}
                                </div>

                                <Box className="flex justify-between mt-6">
                                    <Button
                                        variant="outlined"
                                        disabled={activeStep === 1}
                                        onClick={handleBack}
                                    >
                                        TRỞ VỀ
                                    </Button>

                                    {activeStep <= steps.length && (
                                        <Button variant="contained" onClick={handleNext}>
                                            TIẾP THEO
                                        </Button>
                                    )}
                                </Box>
                            </>
                        )}
                    </Box>
                </Box>
            </div>
        </div>
    );
}
