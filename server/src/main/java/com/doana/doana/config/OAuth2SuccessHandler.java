package com.doana.doana.config;

import com.doana.doana.Repositories.UserRepository;
import com.doana.doana.models.User;
import com.doana.doana.services.JwtUtil;
import com.doana.doana.services.UserService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

@Service
public class OAuth2SuccessHandler implements AuthenticationSuccessHandler {

    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication)
            throws IOException, ServletException {

        OAuth2AuthenticationToken oauthToken = (OAuth2AuthenticationToken) authentication;
        Map<String, Object> attributes = oauthToken.getPrincipal().getAttributes();

        String email = (String) attributes.get("email");
        String name = (String) attributes.get("name");


        // Create user if there were no users found
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isEmpty()) {
            User newUser = new User();
            newUser.setName(name);
            newUser.setEmail(email);
            newUser.setPassword(generateRandomPassword());
            newUser.setPhone("none");
            newUser.setRole("USER");
            newUser.setAddress("none");

            userRepository.save(newUser);

            UserDetails userDetail = userDetailsService.loadUserByUsername(email);
            // Generate JWT
            String jwt = jwtUtil.generateToken(userDetail);

            // Redirect to frontend with JWT as a query parameter
            String redirectUrl = "http://localhost:3000/auth/google/callback?token=" + jwt;
            response.sendRedirect(redirectUrl);
        } else {
            UserDetails userDetail = userDetailsService.loadUserByUsername(email);
            // Generate JWT
            String jwt = jwtUtil.generateToken(userDetail);

            // Redirect to frontend with JWT as a query parameter
            String redirectUrl = "http://localhost:3000/auth/google/callback?token=" + jwt;
            response.sendRedirect(redirectUrl);
        }
    }

    private static String generateRandomPassword() {
        int length = 20;
        // Define the character set.
        String characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Random random = new Random();
        StringBuilder stringBuilder = new StringBuilder(length); // Use StringBuilder for efficiency.

        // Loop to generate each character of the string.
        for (int i = 0; i < length; i++) {
            // Generate a random index to select a character from the character set.
            int randomIndex = random.nextInt(characters.length());
            // Append the randomly selected character to the StringBuilder.
            stringBuilder.append(characters.charAt(randomIndex));
        }

        // Convert the StringBuilder to a String and return it.
        return stringBuilder.toString();
    }
}
