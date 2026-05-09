package onlinebookstore.service;

import org.springframework.stereotype.Service;

@Service
public class CartService {

    public String getCart() {

        return "Cart fetched from service";
    }
}