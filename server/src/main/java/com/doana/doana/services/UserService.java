package com.doana.doana.services;

import com.doana.doana.Repositories.UserRepository;
import com.doana.doana.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User createUser(String name, String email, String password, String phone) {
        System.out.println(password);
        // Check if user already exists by email
        if (userRepository.findByEmail(email).isPresent()) {
            throw new RuntimeException("User with this email already exists");
        }

        // Encrypt the password before saving
        String encryptedPassword = passwordEncoder.encode(password);

        // Create new User object
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setPassword(encryptedPassword);
        user.setPhone(phone);
        user.setAddress("none");
        user.setRole("USER");  // Default role

        // Save user to the database
        User savedUser = userRepository.save(user);

        // Return the saved user wrapped in an Optional
        return savedUser;
    }
}
