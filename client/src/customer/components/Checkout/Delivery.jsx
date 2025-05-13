import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';

const Delivery = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get("firstName"),
            lastName: data.get('lastName'),
            address: data.get('address'),
            city: data.get('city'),
            state: data.get('state'),
            phone: data.get('phone')
        }
        console.log("address", address);
    }

    return (
        <Box p={4}>
            <div className="flex flex-col md:flex-row gap-4">
                {/* Left Panel */}
                <div className="w-full md:w-5/12">
                    <Box
                        className="shadow-md border rounded-md h-full flex flex-col justify-between p-3"
                    >
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 1 }}>BACK</Typography>
                        <AddressCard />
                        <Button
                            sx={{
                                mt: 3,
                                backgroundColor: "rgb(145,85,253)",
                                '&:hover': { backgroundColor: "rgb(125,65,233)" }
                            }}
                            variant="contained"
                            fullWidth
                        >
                            GIAO ĐẾN ĐỊA CHỈ NÀY
                        </Button>
                    </Box>
                </div>

                {/* Right Panel (Form) */}
                <div className="w-full md:w-7/12">
                    <Box className="shadow-md border rounded-md p-3">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full sm:w-1/2 px-2 mb-4">
                                    <TextField id="firstName" name="firstName" autoComplete="given-name" required fullWidth label="First Name" />
                                </div>
                                <div className="w-full sm:w-1/2 px-2 mb-4">
                                    <TextField id="lastName" name="lastName" autoComplete="family-name" required fullWidth label="Last Name" />
                                </div>
                                <div className="w-full px-2 mb-4">
                                    <TextField id="address" name="address" autoComplete="street-address" required fullWidth label="Address" multiline rows={2} />
                                </div>
                                <div className="w-full sm:w-1/2 px-2 mb-4">
                                    <TextField id="city" name="city" required fullWidth label="City" />
                                </div>
                                <div className="w-full sm:w-1/2 px-2 mb-4">
                                    <TextField id="state" name="state" required fullWidth label="State/Province/Region" />
                                </div>
                                <div className="w-full sm:w-1/2 px-2 mb-4">
                                    <TextField id="phone" name="phone" required fullWidth label="Phone Number" />
                                </div>
                                <div className="w-full px-2">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            backgroundColor: "rgb(145,85,253)",
                                            '&:hover': { backgroundColor: "rgb(125,65,233)" },
                                            mt: 2
                                        }}
                                    >
                                        GIAO ĐẾN ĐỊA CHỈ NÀY
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Box>
                </div>
            </div>
        </Box>
    );
};

export default Delivery;