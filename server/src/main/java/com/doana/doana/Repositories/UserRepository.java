package com.doana.doana.Repositories;

import com.doana.doana.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findById(Long id);

    Optional<User> findByEmail(String email);
}
