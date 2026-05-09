package onlinebookstore.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cart")
public class CartController {

    @PostMapping
    public String addToCart() {

        return "Book added to cart";
    }

    @GetMapping
    public String getCart() {

        return "Fetching cart items";
    }

    @DeleteMapping("/{id}")
    public String removeFromCart(@PathVariable int id) {

        return "Removed item with ID: " + id;
    }
}