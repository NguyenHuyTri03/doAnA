package com.doana.doana.Repositories;

import com.doana.doana.models.User;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, Integer> {
    // Update a user
//    @Modifying
//    @Query("update User ")

    // Find a user by the provided ID
//    User FindById(int id);
    Optional<User> findById(UUID id);

}
