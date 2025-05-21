package com.doana.doana.controllers;

import com.doana.doana.models.Category;
import com.doana.doana.models.Product;
import com.doana.doana.services.CategoryService;
import com.doana.doana.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin()
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private CategoryService categoryService;

    // Get product by ID
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return productService.getProductById(id)
                .map(p -> new ResponseEntity<>(p, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Get all products
    @GetMapping("/")
    public ResponseEntity<List<Product>> getAllProducts() {
        try {
            return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get products by category name (main category)
    @GetMapping("/byCategory/{name}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable String name) {
        Optional<Category> categoryOpt = categoryService.getCategoryByName(name);
        return categoryOpt.map(category -> new ResponseEntity<>(productService.getProductsByCategory(category), HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Create a new product
    @PostMapping("/")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        try {
            Product saved = productService.createProduct(product);
            return new ResponseEntity<>(saved, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    // Update an existing product
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
        try {
            Product product = productService.updateProduct(id, updatedProduct);
            return product != null
                    ? new ResponseEntity<>(product, HttpStatus.OK)
                    : new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    // Delete a product
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
