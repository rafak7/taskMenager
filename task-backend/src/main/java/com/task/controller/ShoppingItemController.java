package com.task.controller;

import com.task.model.ShoppingItem;
import com.task.repository.ShoppingItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shopping")
public class ShoppingItemController {

    @Autowired
    private ShoppingItemRepository shoppingItemRepository;

    @GetMapping
    public List<ShoppingItem> getShoppingItems() {
        return shoppingItemRepository.findAll();
    }

    @PostMapping
    public ShoppingItem addShoppingItem(@RequestBody ShoppingItem item) {
        return shoppingItemRepository.save(item);
    }

    @PutMapping("/{id}")
    public ShoppingItem updateShoppingItem(@PathVariable Long id, @RequestBody ShoppingItem itemDetails) {
        ShoppingItem item = shoppingItemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Item not found with id " + id));
        item.setName(itemDetails.getName());
        item.setBought(itemDetails.isBought());
        return shoppingItemRepository.save(item);
    }

    @DeleteMapping("/{id}")
    public void deleteShoppingItem(@PathVariable Long id) {
        shoppingItemRepository.deleteById(id);
    }
}
