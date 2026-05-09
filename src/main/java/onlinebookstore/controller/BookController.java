package onlinebookstore.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/books")
public class BookController {

    @GetMapping
    public String getBooks() {

        return "Fetching all books";
    }

    @GetMapping("/{id}")
    public String getBookById(@PathVariable int id) {

        return "Fetching book with ID: " + id;
    }
}