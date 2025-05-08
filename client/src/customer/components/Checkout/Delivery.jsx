import React from 'react';
import { Grid, Box, Button, TextField, Typography } from '@mui/material';
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
            zip: data.get('zip'),
            phone: data.get('phone')
        }
        console.log("address", address);
    }



    return (
        <Box p={4}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={5}>
                    <Box
                        className="shadow-md border rounded-md"
                        p={3}
                        height="100%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                    >
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 1 }}>BACK</Typography>
                        <AddressCard />
                        <Button
                            sx={{ mt: 3, backgroundColor: "rgb(145,85,253)", '&:hover': { backgroundColor: "rgb(125,65,233)" } }}
                            variant="contained"
                            fullWidth
                        >
                            DELIVER HERE
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={12} md={7}>
                    <Box className="shadow-md border rounded-md" p={3}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField id="firstName" name="firstName" autoComplete="given-name" required fullWidth label="First Name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField id="lastName" name="lastName" autoComplete="given-name" required fullWidth label="Last Name" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField id="address" name="address" autoComplete="given-name" required fullWidth label="Address" multiline rows={2} />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required fullWidth label="City" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required fullWidth label="State/Province/Region" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required fullWidth label="Zip / Postal code" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required fullWidth label="Phone Number" />
                                </Grid>
                                <Grid item xs={12}>
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
                                        DELIVER HERE
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Delivery;
