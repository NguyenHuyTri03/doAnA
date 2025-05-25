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

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private SizeRepository sizeRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CategoryService categoryService;

    // Create a new product
    @Transactional
    public Product createProduct(Product product) {
        // Get main category by name
        Category mainCategory = categoryService.getCategoryByName(product.getMainCategory().getName())
                .orElseThrow(() -> new IllegalArgumentException("Main category not found: " + product.getMainCategory().getName()));

        product.setMainCategory(mainCategory);

        // Get sub-category if provided
        if (product.getSubCategory() != null) {
            Category subCategory = categoryService.getCategoryByName(product.getSubCategory().getName())
                    .orElseThrow(() -> new IllegalArgumentException("Sub-category not found: " + product.getSubCategory().getName()));

            // Validate that sub-category belongs to main category
            if (subCategory.getParent() == null || !subCategory.getParent().getId().equals(mainCategory.getId())) {
                throw new IllegalArgumentException("Sub-category is not a child of the main category.");
            }

            product.setSubCategory(subCategory);
        }

        // Associate sizes
        if (product.getSizes() != null) {
            for (Size size : product.getSizes()) {
                size.setProduct(product);
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

    public List<Product> getProductsByCategory(Category category) {
        Long categoryId = category.getId();
        return productRepository.findByMainCategoryIdOrSubCategoryId(categoryId, categoryId);
    }

    // Update an existing product
    @Transactional
    public Product updateProduct(Long id, Product updatedProduct) {
        Optional<Product> existingProductOptional = productRepository.findById(id);
        if (existingProductOptional.isEmpty()) {
            throw new NoSuchElementException("Product not found with id: " + id);
        }

        Product existingProduct = existingProductOptional.get();

        // Update main category
        Category mainCategory = categoryService.getCategoryByName(updatedProduct.getMainCategory().getName())
                .orElseThrow(() -> new IllegalArgumentException("Main category not found: " + updatedProduct.getMainCategory().getName()));

        existingProduct.setMainCategory(mainCategory);

        // Update sub-category
        if (updatedProduct.getSubCategory() != null) {
            Category subCategory = categoryService.getCategoryByName(updatedProduct.getSubCategory().getName())
                    .orElseThrow(() -> new IllegalArgumentException("Sub-category not found: " + updatedProduct.getSubCategory().getName()));

            if (subCategory.getParent() == null || !subCategory.getParent().getId().equals(mainCategory.getId())) {
                throw new IllegalArgumentException("Sub-category is not a child of the main category.");
            }

            existingProduct.setSubCategory(subCategory);
        } else {
            existingProduct.setSubCategory(null); // Remove if null
        }

        // Update fields
        existingProduct.setImageUrl(updatedProduct.getImageUrl());
        existingProduct.setName(updatedProduct.getName());
        existingProduct.setPrice(updatedProduct.getPrice());
        existingProduct.setDiscountPercent(updatedProduct.getDiscountPercent());
        existingProduct.setDescription(updatedProduct.getDescription());

        // Update sizes
        if (updatedProduct.getSizes() != null) {
            existingProduct.getSizes().clear();
            for (Size size : updatedProduct.getSizes()) {
                size.setProduct(existingProduct);
            }
            existingProduct.getSizes().addAll(updatedProduct.getSizes());
        }

        return productRepository.save(existingProduct);
    }

    // Delete a product by its ID
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
