package com.doana.doana.controllers;

import com.doana.doana.Repositories.UserRepository;
import com.doana.doana.models.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Random;
import java.util.UUID;

@RestController
@CrossOrigin
public class userController {
    private final UserRepository userRepository;

    public userController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/ping")
    public String Ping() {
        return generateRandomString();
    }

    @PostMapping("/user/create")
    public ResponseEntity CreateUser(@RequestBody User newUser) {
        try {
            User user = new User();
            user.setName(newUser.getName());
            user.setPassword(newUser.getPassword());
            user.setEmail(newUser.getEmail());
            user.setAddress(newUser.getAddress());
            user.setPhone(newUser.getPhone());
            user.setRole(newUser.getRole());

            userRepository.save(user);
            System.out.println(user.getId().toString());
            return ResponseEntity.ok(HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/user/get")
    public ResponseEntity GetUser(@RequestBody Long id) {
        try {
            Optional<User> user = userRepository.findById(id);
            return ResponseEntity.status(HttpStatus.FOUND).body(user);
        }catch(Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PutMapping("user/update")
    public ResponseEntity UpdateUser() {
        // Logic to update user
        try {


            return ResponseEntity.ok(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }

    }

    @DeleteMapping("user/delete")
    public String DeleteUser() {
        // Logic to delete user

        return "DeleteUser";
    }

    private static String generateRandomString() {
        int length = 20;

        // Character set
        final String CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
        Random random = new Random();
        StringBuilder stringBuilder = new StringBuilder(length);

        // Generate the random string
        for (int i = 0; i < length; i++) {
            int randomIndex = random.nextInt(CHARACTERS.length());
            char randomChar = CHARACTERS.charAt(randomIndex);
            stringBuilder.append(randomChar);
        }

        return stringBuilder.toString();
    }

}
