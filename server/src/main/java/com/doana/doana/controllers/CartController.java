package com.doana.doana.controllers;

import com.doana.doana.models.Cart;
import com.doana.doana.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/carts")
public class CartController {
    @Autowired
    private CartService cartService;

    // Create a new cart
    @PostMapping("/users/{userId}")
    public ResponseEntity<Cart> createCart(@PathVariable Long userId) {
        Cart cart = cartService.createCart(userId);
        return new ResponseEntity<>(cart, HttpStatus.CREATED);
    }

    // Get cart by user ID
    @GetMapping("/{id}")
    public ResponseEntity<Cart> getCartById(@PathVariable Long id) {
        Optional<Cart> cart = cartService.getCartById(id);
        return cart.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Add a product to the cart of a user
    @PostMapping("/{cartId}/products/{productId}")
    public ResponseEntity<Cart> addProductToCart(
            @PathVariable Long cartId,
            @PathVariable Long productId,
            @RequestParam Integer quantity) {
        try {
            Optional<Cart> cart = cartService.getCartById(cartId);
            if(cart.isPresent()) {
                cartService.addProductToCart(cartId, productId, quantity);
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    // Remove a product from the cart
    @DeleteMapping("/{cartId}/products/{productId}")
    public ResponseEntity<Cart> removeProductFromCart(
            @PathVariable Long cartId,
            @PathVariable Long productId) {
        try {
            Cart cart = cartService.removeProductFromCart(cartId, productId);
            return new ResponseEntity<>(cart, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCart(@PathVariable Long id) {
        cartService.deleteCart(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
