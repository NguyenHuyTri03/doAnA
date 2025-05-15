package com.doana.doana.services;

import com.doana.doana.Repositories.CategoryRepository;
import com.doana.doana.Repositories.ProductRepository;
import com.doana.doana.Repositories.SizeRepository;
import com.doana.doana.models.Category;
import com.doana.doana.models.Product;
import com.doana.doana.models.Size;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private SizeRepository SizeRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    // Create a new product
    @Transactional
    public Product createProduct(Product product) {
        //  Get category by name.
        Category category = categoryRepository.findByName(product.getCategory().getName());
        if (category == null) {
            throw new IllegalArgumentException("Category not found: " + product.getCategory().getName());
        }
        product.setCategory(category);

        // Ensure that the product object being saved has its sizes associated correctly
        if (product.getSizes() != null) {
            for (Size size : product.getSizes()) {
                size.setProduct(product); // Set the product for each size.
            }
        }
        return productRepository.save(product);
    }

    // Read a product by its ID
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    // Read all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Update an existing product
    @Transactional //  Add this annotation.
    public Product updateProduct(Long id, Product updatedProduct) {
        Optional<Product> existingProductOptional = productRepository.findById(id);
        if (existingProductOptional.isPresent()) {
            Product existingProduct = existingProductOptional.get();
            // Update the category.
            Category category = categoryRepository.findByName(updatedProduct.getCategory().getName());
            if (category == null) {
                throw new IllegalArgumentException("Category not found: " + updatedProduct.getCategory().getName());
            }
            existingProduct.setCategory(category);

            existingProduct.setImageUrl(updatedProduct.getImageUrl());
            existingProduct.setName(updatedProduct.getName());
            existingProduct.setPrice(updatedProduct.getPrice());
            existingProduct.setDiscountPercent(updatedProduct.getDiscountPercent());
            existingProduct.setDescription(updatedProduct.getDescription());

            // Handle updating the sizes
            if (updatedProduct.getSizes() != null) {
                // Remove existing sizes
                existingProduct.getSizes().clear();
                // Add the new sizes, ensuring they are linked to the product
                for (Size size : updatedProduct.getSizes()) {
                    size.setProduct(existingProduct);
                }
                existingProduct.getSizes().addAll(updatedProduct.getSizes());
            }

            return productRepository.save(existingProduct);
        } else {
            // Handle the case where the product with the given ID doesn't exist
            return null; // Or throw an exception
        }
    }

    // Delete a product by its ID
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
