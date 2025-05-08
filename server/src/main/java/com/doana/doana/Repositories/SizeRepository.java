package com.doana.doana.Repositories;

import com.doana.doana.models.Size;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SizeRepository extends JpaRepository<Size, Integer> {
    List<Size> findByProductId(int productId);
}
