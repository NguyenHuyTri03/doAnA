import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Link
} from '@mui/material';
import bcrypt from "bcryptjs";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
    });
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.confirmPassword === formData.password) {
            try {

                const registerResponse = await fetch("http://localhost:8080/api/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.lastName + " " + formData.firstName,
                        email: formData.email,
                        password: formData.password,
                        phone: formData.phone,
                    }),
                });

                if (registerResponse.ok) {
                    console.log("User registered successfully");

                    // Auto-login after successful registration
                    await login(formData.email, formData.password);

                    // Redirect to a protected page, e.g., dashboard
                    navigate("/");
                } else {
                    console.log("Registration failed");
                }
            } catch (error) {
                console.error("Registration or login error", error);
            }
        } else {
            console.log("Passwords do not match");
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                backgroundImage: 'url(https://i.ytimg.com/vi/nrcakd1sfrs/maxresdefault.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    borderRadius: 2,
                    boxShadow: 3,
                    maxWidth: 500,
                    width: '100%',
                    p: 4,
                    mt: { xs: 8, sm: 10 },
                }}
            >
                <Typography component="h1" variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
                    Đăng ký tài khoản
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                        <TextField
                            label="Họ"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Tên"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Box>
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Mật khẩu"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Xác nhận mật khẩu"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Số điện thoại"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: "rgb(145,85,253)",
                            '&:hover': { backgroundColor: "rgb(125,65,233)" }
                        }}
                    >
                        Đăng ký
                    </Button>
                    <Box sx={{ textAlign: 'center' }}>
                        <Link href="/login" variant="body2">
                            Đã có tài khoản? Đăng nhập
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Register;
