package com.doana.doana.models;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "carts")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @ManyToMany
    @JoinTable(
            name = "cart_products",
            joinColumns = @JoinColumn(name = "cart_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private List<Product> products = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "cart_product_quantities", joinColumns = @JoinColumn(name = "cart_id"))
    @MapKeyJoinColumn(name = "product_id")
    @Column(name = "quantity")
    private java.util.Map<Product, Integer> quantities = new java.util.HashMap<>();

    // Constructors, getters, and setters
    public Cart() {}

    public Cart(User user) {
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public java.util.Map<Product, Integer> getQuantities() {
        return quantities;
    }

    public void setQuantities(java.util.Map<Product, Integer> quantities) {
        this.quantities = quantities;
    }

    // Add product to cart
    public void addProduct(Product product, Integer quantity) {
        if (products.contains(product)) {
            quantities.put(product, quantities.get(product) + quantity);
        } else {
            this.products.add(product);
            this.quantities.put(product, quantity);
        }
    }

    // Remove product from cart
    public void removeProduct(Product product) {
        this.products.remove(product);
        this.quantities.remove(product);
    }
}
