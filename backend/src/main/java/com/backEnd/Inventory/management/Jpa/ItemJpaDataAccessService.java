package com.backEnd.Inventory.management.Jpa;

import com.backEnd.Inventory.management.Dao.ItemDao;
import com.backEnd.Inventory.management.Model.Item;
import com.backEnd.Inventory.management.Repository.ItemRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("jpa")
public class ItemJpaDataAccessService implements ItemDao {
    private final ItemRepository itemRepository;

    public ItemJpaDataAccessService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @Override
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @Override
    public Optional<Item> getItemById(int id) {
        return itemRepository.findById(id);
    }

    @Override
    public void addItem(Item item) {
        itemRepository.save(item);
    }

    @Override
    public void deleteItem(int id) {
        itemRepository.deleteById(id);
    }


    public boolean existsByNameAndType(String name, String type) {
        return itemRepository.existsByNameAndType(name, type);
    }


    public boolean isValidDimensionFormat(String dimension) {
        return dimension.matches("\\d+\\*\\d+\\*\\d+");
    }


    public boolean isValidDateFormat(String date) {
        return date.matches("\\d{4}-\\d{2}-\\d{2}");
    }


}
