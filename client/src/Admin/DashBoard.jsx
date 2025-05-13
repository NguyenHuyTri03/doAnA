import React from 'react';
import {
    Box,
    Typography,
    Button,
    IconButton,
    Card,
    CardContent,
    CardMedia,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { test as productData } from '../Data/test.js';

const DashBoard = () => {
    const handleEdit = (id) => {
        console.log('Edit sản phẩm ID:', id);
    };

    const handleDelete = (id) => {
        console.log('Xóa sản phẩm ID:', id);
    };

    return (
        <Box
            component="main"
            sx={{
                pt: { xs: 12, sm: 14 },
                pb: 4,
                px: { xs: 2, sm: 4 },
                minHeight: '100vh',
                backgroundColor: '#f5f7fa',
            }}
        >
            {/* Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} flexWrap="wrap" gap={2}>
                <Typography variant="h4" fontWeight="bold">Quản lý Sản phẩm</Typography>
                <Box display="flex" gap={2}>
                    <Button component={Link} to="/add-product" variant="contained" color="primary">
                        ➕ Thêm sản phẩm
                    </Button>
                    <Button component={Link} to="/" variant="outlined">Về Trang Chủ</Button>
                </Box>
            </Box>

            {/* Danh sách sản phẩm */}
            <Typography variant="h6" fontWeight="bold" gutterBottom>📦 Danh sách sản phẩm</Typography>

            <Box
                display="flex"
                flexWrap="wrap"
                gap={3}
                justifyContent="flex-start"
            >
                {productData.map((product) => (
                    <Card
                        key={product.id}
                        sx={{
                            width: 300,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            boxShadow: 3,
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={product.imageUrl}
                            alt={product.name}
                            sx={{
                                height: 180,
                                objectFit: 'cover',
                            }}
                        />
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                {product.description.slice(0, 100)}...
                            </Typography>
                            <Typography variant="subtitle1" fontWeight="bold" color="primary">
                                {product.price.toLocaleString()} VNĐ
                            </Typography>
                            <Typography variant="body2" mt={1}>
                                {product.size.map(s => `${s.name}: ${s.quantity}`).join(' | ')}
                            </Typography>

                            <Box mt={2} display="flex" justifyContent="space-between">
                                <IconButton color="primary" onClick={() => handleEdit(product.id)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton color="error" onClick={() => handleDelete(product.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default DashBoard;
