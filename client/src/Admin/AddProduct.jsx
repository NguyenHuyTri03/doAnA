import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    MenuItem,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const categories = [
    { value: 'ca-phe-hat', label: 'Cà phê hạt' },
    { value: 'ca-phe-hoa-tan', label: 'Cà phê hòa tan' },
];

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [discountPercent, setDiscountPercent] = useState('');
    const [sizes, setSizes] = useState([{ name: '', quantity: 0 }]);

    const handleSizeChange = (index, field, value) => {
        const newSizes = [...sizes];
        newSizes[index][field] = field === 'quantity' ? parseInt(value) || 0 : value;
        setSizes(newSizes);
    };

    const addSize = () => {
        setSizes([...sizes, { name: '', quantity: 0 }]);
    };

    const removeSize = (index) => {
        const newSizes = [...sizes];
        newSizes.splice(index, 1);
        setSizes(newSizes.length > 0 ? newSizes : [{ name: '', quantity: 0 }]);
    };

    const handleSubmit = () => {
        const product = {
            name,
            price: parseFloat(price),
            imageUrl,
            description,
            category,
            discountPercent: parseInt(discountPercent),
            size: sizes.filter(s => s.name.trim() !== ''),
        };

        console.log('🆕 Sản phẩm mới:', product);
        alert('Đã log sản phẩm mới ra console. Tích hợp xử lý sau.');
    };

    return (
        <Box
            sx={{
                pt: { xs: 10, sm: 12 },
                pb: 4,
                px: { xs: 2, sm: 4 },
                minHeight: '100vh',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Paper sx={{ maxWidth: 600, mx: 'auto', p: 4 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    ➕ Thêm sản phẩm mới
                </Typography>

                <TextField
                    label="Tên sản phẩm"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ mb: 2 }}
                />

                <TextField
                    label="Giá (VNĐ)"
                    fullWidth
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    sx={{ mb: 2 }}
                />

                <TextField
                    label="Giảm giá (%)"
                    fullWidth
                    type="number"
                    value={discountPercent}
                    onChange={(e) => setDiscountPercent(e.target.value)}
                    sx={{ mb: 2 }}
                />

                <TextField
                    label="Danh mục"
                    fullWidth
                    select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    sx={{ mb: 2 }}
                >
                    {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="URL ảnh"
                    fullWidth
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    sx={{ mb: 2 }}
                />

                <TextField
                    label="Mô tả"
                    fullWidth
                    multiline
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ mb: 3 }}
                />

                <Typography variant="subtitle1" fontWeight="bold">Kích thước & số lượng</Typography>
                {sizes.map((s, index) => (
                    <Box key={index} display="flex" gap={1} alignItems="center" mb={1}>
                        <TextField
                            label="Tên size"
                            value={s.name}
                            onChange={(e) => handleSizeChange(index, 'name', e.target.value)}
                            size="small"
                            sx={{ flex: 1 }}
                        />
                        <TextField
                            label="Số lượng"
                            type="number"
                            value={s.quantity}
                            onChange={(e) => handleSizeChange(index, 'quantity', e.target.value)}
                            size="small"
                            sx={{ width: 100 }}
                        />
                        <IconButton onClick={() => removeSize(index)} size="small" color="error">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                ))}
                <Button onClick={addSize} size="small" sx={{ mt: 1, mb: 3 }} variant="outlined">
                    ➕ Thêm size
                </Button>

                <Box mt={2}>
                    <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                        Lưu sản phẩm
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default AddProduct;
