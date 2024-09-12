package com.backEnd.Inventory.management.Controller;

import com.backEnd.Inventory.management.Model.Item;
import com.backEnd.Inventory.management.RegistrationRequest.ItemRegistrationRequest;
import com.backEnd.Inventory.management.Service.ItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class ItemController {
    ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }
    @GetMapping
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }
    @GetMapping("/{id}")
    public Item getItemById(@PathVariable int id) {
        return itemService.getItemById(id);
    }
    @PostMapping
    public void addItem(@RequestBody ItemRegistrationRequest item) {
        itemService.addItem(item);
    }
    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable int id) {
        itemService.deleteItem(id);
    }
}
