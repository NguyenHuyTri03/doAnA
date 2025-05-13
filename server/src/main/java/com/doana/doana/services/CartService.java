package com.doana.doana.services;

import com.doana.doana.Repositories.CartRepository;
import com.doana.doana.Repositories.ProductRepository;
import com.doana.doana.Repositories.UserRepository;
import com.doana.doana.models.Cart;
import com.doana.doana.models.Product;
import com.doana.doana.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private UserRepository userRepository;  //  assuming you have a UserRepository

    @Autowired
    private ProductRepository productRepository; // Assuming you have ProductRepository

    public Cart createCart(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
        Cart cart = new Cart(user);
        return cartRepository.save(cart);
    }

    public Optional<Cart> getCartById(Long id) {
        return cartRepository.findById(id);
    }

    public List<Cart> getAllCarts() {
        return cartRepository.findAll();
    }

    public Cart addProductToCart(Long cartId, Long productId, Integer quantity) {
        Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new IllegalArgumentException("Cart not found"));
        Product product = productRepository.findById(productId).orElseThrow(() -> new IllegalArgumentException("Product not found"));
        cart.addProduct(product, quantity);
        return cartRepository.save(cart);
    }
    public Cart removeProductFromCart(Long cartId, Long productId) {
        Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new IllegalArgumentException("Cart not found"));
        Product product = productRepository.findById(productId).orElseThrow(() -> new IllegalArgumentException("Product not found"));
        cart.removeProduct(product);
        return cartRepository.save(cart);
    }

    public void deleteCart(Long id) {
        cartRepository.deleteById(id);
    }
}
