package com.doana.doana.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class HealthCheck {
    @GetMapping("/ping")
    public ResponseEntity<?> Ping() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Pong!");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
