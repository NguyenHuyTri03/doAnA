package com.doana.doana.Repositories;

import com.doana.doana.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByMainCategoryId(Long mainCategoryId);
}
