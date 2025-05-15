package com.doana.doana.controllers;

import com.doana.doana.Repositories.UserRepository;
import com.doana.doana.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @PostMapping("/")
    public ResponseEntity CreateUser(@RequestBody User newUser) {
        try {
            userRepository.save(newUser);
            return ResponseEntity.ok(HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("User creation failed");
        }
    }

    @PostMapping("/me/{email}")
    public ResponseEntity GetUser(@PathVariable String email) {
        try {
            Optional<User> user = userRepository.findByEmail(email);
            if(user.isPresent()) {
                return ResponseEntity.status(HttpStatus.OK).body(user.get());
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        }catch(Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("User not found");
        }
    }

    @PutMapping("/")
    public ResponseEntity UpdateUser(@RequestBody User newUser) {
        try {
            userRepository.save(newUser);
            return ResponseEntity.ok(HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("User update failed");
        }
    }

    @DeleteMapping("/")
    public ResponseEntity DeleteUser(@RequestBody User user) {
        try {
            userRepository.delete(user);
            return ResponseEntity.ok(HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("User deletion failed");
        }
    }
}
