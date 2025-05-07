import React from 'react'
import { Grid, Button, Box, TextField } from '@mui/material'
import AddressCard from '../AddressCard/AddressCard'

const DeliveryAForm = () => {
    return (
        <div>
            <Grid container spacing={4}>
                <Grid className='border rounded-e-md shadow-md h-[30.5 rem] overflow-y-scroll '>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard />
                        <Button

                            xs={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                            size="large"
                            variant="contained" >
                            Delivery here
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className='border rounded-s-md shadow-md p-5'>
                        <form>
                            <Grid container spacing={3}>
                                {/* first name */}
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                {/* last name  */}
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                {/* address */}
                                <Grid item xs={12} >
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete="given-name"
                                        multiline
                                        rows={4}
                                    />
                                </Grid>

                                {/* first name */}
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="City"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>

                                {/* first name */}
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="State/Provice/Region"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                {/* first name */}
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="Phone number"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                {/* first name */}
                                <Grid item xs={12} sm={6}>
                                   <Button>Deliver here</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div >
    )
}

export default DeliveryAForm