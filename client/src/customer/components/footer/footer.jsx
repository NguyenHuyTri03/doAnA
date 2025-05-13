import React from 'react';
import { Typography, Link, Box, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer">
      <Grid
        container
        spacing={4}
        sx={{ bgcolor: '#f57921', color: 'white', py: 5, px: { xs: 2, md: 10 } }}
      >
        {/* Cột 1: Giới thiệu công ty */}
        <Grid component="div" item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            CÔNG TY TNHH CÀ PHÊ ABC
          </Typography>
          <Typography variant="body2">
            Địa chỉ: 123 Đường Nguyễn Huệ, Quận 1, TP.HCM
          </Typography>
          <Typography variant="body2">SĐT: 0123 456 789</Typography>
          <Typography variant="body2">Email: contact@capheabc.vn</Typography>
        </Grid>

        {/* Cột 2: Liên kết điều hướng */}
        <Grid component="div" item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Về chúng tôi
          </Typography>
          <Typography>
            <Link href="/san-pham" color="inherit" underline="hover">
              Tất cả sản phẩm
            </Link>
          </Typography>
          <Typography>
            <Link href="/lien-he" color="inherit" underline="hover">
              Liên hệ
            </Link>
          </Typography>
        </Grid>

        {/* Cột 3: Danh mục sản phẩm nổi bật */}
        <Grid component="div" item xs={12} sm={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Danh mục sản phẩm
          </Typography>
          <Typography>
            <Link href="/products" color="inherit" underline="hover">
              Cafe
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Trà
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Máy pha cà phê
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
