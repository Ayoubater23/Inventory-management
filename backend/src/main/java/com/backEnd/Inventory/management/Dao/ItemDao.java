package com.backEnd.Inventory.management.Dao;

import com.backEnd.Inventory.management.Model.Item;

import java.util.List;
import java.util.Optional;

public interface ItemDao {
    public List<Item> getAllItems();
    public Optional<Item> getItemById(int id);
    public void addItem(Item item);
    public void deleteItem(int id);
    public boolean existsByNameAndType(String name, String type);
    public boolean isValidDimensionFormat(String dimension);
    public boolean isValidDateFormat(String date);
}
