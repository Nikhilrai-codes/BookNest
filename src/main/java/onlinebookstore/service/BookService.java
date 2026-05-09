package onlinebookstore.service;

import org.springframework.stereotype.Service;

@Service
public class BookService {

    public String getBooks() {

        return "Books fetched from service";
    }
}