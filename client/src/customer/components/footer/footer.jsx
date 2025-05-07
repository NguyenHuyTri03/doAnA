import React from 'react';
import { Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Grid
        container
        spacing={4}
        sx={{ bgcolor: '#f57921', color: 'white', py: 5, px: { xs: 2, md: 10 } }}
      >
        {/* Cột 1: Giới thiệu công ty */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            CÔNG TY TNHH CÀ PHÊ ABC
          </Typography>
          <Typography variant="body2">Địa chỉ: 123 Đường Nguyễn Huệ, Quận 1, TP.HCM</Typography>
          <Typography variant="body2">SĐT: 0123 456 789</Typography>
          <Typography variant="body2">Email: contact@capheabc.vn</Typography>
        </Grid>

        {/* Cột 2: Liên kết điều hướng */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Liên kết nhanh
          </Typography>
          <Typography>
            <Link href="/products" color="inherit" underline="hover">
              Tất cả sản phẩm
            </Link>
          </Typography>
          <Typography>
            <Link href="/gioi-thieu" color="inherit" underline="hover">
              Về chúng tôi
            </Link>
          </Typography>
          <Typography>
            <Link href="/lien-he" color="inherit" underline="hover">
              Liên hệ
            </Link>
          </Typography>
        </Grid>

        {/* Cột 3: Danh mục sản phẩm nổi bật */}
        <Grid item xs={12} sm={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Sản phẩm nổi bật
          </Typography>
          <Typography>
            <Link href="/product/1" color="inherit" underline="hover">
              Arabica
            </Link>
          </Typography>
          <Typography>
            <Link href="/product/2" color="inherit" underline="hover">
              Robusta
            </Link>
          </Typography>
          <Typography>
            <Link href="/products?category=may-pha-ca-phe" color="inherit" underline="hover">
              Máy pha cà phê
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
