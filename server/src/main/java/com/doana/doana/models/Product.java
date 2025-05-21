package com.doana.doana.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Arrays;
import java.util.List;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String imageUrl;

    @Column(nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "main_category_id", nullable = false)
    private Category mainCategory;

    @ManyToOne
    @JoinColumn(name = "sub_category_id")
    private Category subCategory;

    @Column(nullable = false)
    private Integer price;

    private Integer discountPercent;

    @Column(columnDefinition = "TEXT")
    private String description;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Size> sizes;

    public Product() {
    }

    public Product(Long id, String imageUrl, String name, Category mainCategory, Category subCategory, Integer price, Integer discountPercent, String description, List<Size> sizes) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.name = name;
        this.mainCategory = mainCategory;
        this.subCategory = subCategory;
        this.price = price;
        this.discountPercent = discountPercent;
        this.description = description;
        this.sizes = sizes;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", imageUrl='" + imageUrl + '\'' +
                ", name='" + name + '\'' +
                ", mainCategory=" + mainCategory +
                ", subCategory=" + subCategory +
                ", price=" + price +
                ", discountPercent=" + discountPercent +
                ", description='" + description + '\'' +
                ", sizes=" + sizes +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getMainCategory() {
        return mainCategory;
    }

    public void setMainCategory(Category mainCategory) {
        this.mainCategory = mainCategory;
    }

    public Category getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(Category subCategory) {
        this.subCategory = subCategory;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getDiscountPercent() {
        return discountPercent;
    }

    public void setDiscountPercent(Integer discountPercent) {
        this.discountPercent = discountPercent;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Size> getSizes() {
        return sizes;
    }

    public void setSizes(List<Size> sizes) {
        this.sizes = sizes;
    }
}
