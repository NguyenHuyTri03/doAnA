import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Link
} from '@mui/material';
import { useAuth } from '../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';


const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (loading == false && user) {
            navigate("/");
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await login(email, password);
        navigate("/");
    };

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/google';
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
                    boxShadow: 8,
                    maxWidth: 400,
                    width: '100%',
                    p: 4,
                }}
            >
                <Typography component="h1" variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
                    Đăng Nhập
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Địa chỉ Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Mật khẩu"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        Đăng Nhập
                    </Button>

                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                        onClick={handleGoogleLogin}
                        sx={{ mb: 2 }}
                    >
                        Đăng nhập với Google
                    </Button>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                        <Link href="#" variant="body2">
                            Quên mật khẩu?
                        </Link>
                        <Link href="/register" variant="body2">
                            Chưa có tài khoản? Đăng ký
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
