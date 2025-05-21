package com.doana.doana.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @ManyToOne
    @JoinColumn(name = "parent_id")
    @JsonBackReference
    private Category parent;

    @OneToMany(mappedBy = "parent")
    @JsonManagedReference
//    @JsonIgnore
    private List<Category> subCategories = new ArrayList<>();

    @OneToMany(mappedBy = "mainCategory")
    @JsonIgnore
    private List<Product> mainCategoryProducts = new ArrayList<>();

    @OneToMany(mappedBy = "subCategory")
    @JsonIgnore
    private List<Product> subCategoryProducts = new ArrayList<>();

    public Category() {
    }

    public Category(Long id, String name, Category parent, List<Category> subCategories, List<Product> mainCategoryProducts, List<Product> subCategoryProducts) {
        this.id = id;
        this.name = name;
        this.parent = parent;
        this.subCategories = subCategories;
        this.mainCategoryProducts = mainCategoryProducts;
        this.subCategoryProducts = subCategoryProducts;
    }

    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", parent=" + parent +
                ", subCategories=" + subCategories +
                ", mainCategoryProducts=" + mainCategoryProducts +
                ", subCategoryProducts=" + subCategoryProducts +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getParent() {
        return parent;
    }

    public void setParent(Category parent) {
        this.parent = parent;
    }

    public List<Category> getSubCategories() {
        return subCategories;
    }

    public void setSubCategories(List<Category> subCategories) {
        this.subCategories = subCategories;
    }

    public List<Product> getMainCategoryProducts() {
        return mainCategoryProducts;
    }

    public void setMainCategoryProducts(List<Product> mainCategoryProducts) {
        this.mainCategoryProducts = mainCategoryProducts;
    }

    public List<Product> getSubCategoryProducts() {
        return subCategoryProducts;
    }

    public void setSubCategoryProducts(List<Product> subCategoryProducts) {
        this.subCategoryProducts = subCategoryProducts;
    }
}
