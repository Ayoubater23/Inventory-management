package com.backEnd.Inventory.management.Repository;

import com.backEnd.Inventory.management.Model.Item;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item,Integer> {
    public boolean existsByNameAndType(String name, String type);



}
