package com.doana.doana.services;

import com.doana.doana.Repositories.CategoryRepository;
import com.doana.doana.models.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public Category createCategory(Category category) {
        // Prevent null or duplicate name
        if (category.getName() == null || category.getName().trim().isEmpty()) {
            throw new IllegalArgumentException("Category name cannot be null or empty.");
        }

        if (categoryRepository.findByName(category.getName()).isPresent()) {
            throw new IllegalArgumentException("Category already exists with name: " + category.getName());
        }

        // If parent category is specified
        if (category.getParent() != null) {
            String parentName = category.getParent().getName();

            if (parentName == null || parentName.trim().isEmpty()) {
                throw new IllegalArgumentException("Parent category name cannot be null or empty.");
            }

            // Prevent self-parenting
            if (parentName.equals(category.getName())) {
                throw new IllegalArgumentException("A category cannot be its own parent.");
            }

            // Load parent from DB to ensure valid reference and avoid detached entity
            Category parentFromDb = categoryRepository.findByName(parentName)
                    .orElseThrow(() -> new IllegalArgumentException("Parent category not found: " + parentName));

            // Check for circular references (optional, but strongly recommended)
            Category current = parentFromDb.getParent();
            while (current != null) {
                if (current.getName().equals(category.getName())) {
                    throw new IllegalArgumentException("Circular reference detected: this category is already in the parent chain.");
                }
                current = current.getParent();
            }

            // Safe to assign parent
            category.setParent(parentFromDb);
        }

        return categoryRepository.save(category);
    }

    public Optional<Category> getCategoryById(Long id) {
        return categoryRepository.findById(id);
    }

    public Optional<Category> getCategoryByName(String name) {
        return categoryRepository.findByName(name);
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public List<Category> getAllBySubCategory(Long parentId) {
        return categoryRepository.findAllByParentId(parentId);
    }

    public Category updateCategory(Long id, Category updatedCategory) {
        return categoryRepository.findById(id).map(category -> {
            category.setName(updatedCategory.getName());
            category.setParent(updatedCategory.getParent());
            return categoryRepository.save(category);
        }).orElse(null);
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }
}
