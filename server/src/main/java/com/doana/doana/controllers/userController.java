package com.doana.doana.controllers;

import com.doana.doana.models.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Random;

@RestController
@CrossOrigin
public class userController {

//    static User user = new User();

    @GetMapping("/ping")
    public String Ping() {
        return generateRandomString();
    }

    @PostMapping("/user/create")
    public ResponseEntity CreateUser(@RequestBody User newUser) {
//        user.setName(newUser.getName());
//        user.setPassword(newUser.getPassword());
//        user.setEmail(newUser.getEmail());
//        user.setAddress(newUser.getAddress());
//        user.setPhone(newUser.getPhone());
//        user.setRole(newUser.getRole());
        return ResponseEntity.ok(HttpStatus.CREATED);
    }

    @GetMapping("/user/get")
    public ResponseEntity GetUser() {
        // Logic to get user

        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping("user/update")
    public ResponseEntity UpdateUser() {
        // Logic to update user

        return ResponseEntity.ok(HttpStatus.ACCEPTED);
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
