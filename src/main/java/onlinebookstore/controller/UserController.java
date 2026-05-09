package onlinebookstore.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @PostMapping("/login")
    public String login() {

        return "User logged in successfully";
    }

    @PostMapping("/signup")
    public String signup() {

        return "User registered successfully";
    }

    @PostMapping("/checkout")
    public String checkout() {

        return "Order placed successfully";
    }
}