package com.doana.doana.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private PasswordEncoder passwordEncoder;

    public boolean verifyPassword(String rawPassword, String storedHashedPassword) {
        return passwordEncoder.matches(rawPassword, storedHashedPassword);
    }
}
