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
        return categoryRepository.save(category);
    }

    public Optional<Category> getCategoryById(Long id) {
        return categoryRepository.findById(id);
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category updateCategory(Long id, Category updatedCategory) {
        Optional<Category> existingCategoryOptional = categoryRepository.findById(id);
        if (existingCategoryOptional.isPresent()) {
            Category existingCategory = existingCategoryOptional.get();
            existingCategory.setName(updatedCategory.getName());
            return categoryRepository.save(existingCategory);
        } else {
            return null; // Or throw an exception
        }
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    public Category getCategoryByName(String name) {
        return categoryRepository.findByName(name);
    }
}
