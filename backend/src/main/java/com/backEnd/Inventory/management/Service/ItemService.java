package com.backEnd.Inventory.management.Service;

import com.backEnd.Inventory.management.Dao.ItemDao;
import com.backEnd.Inventory.management.Exception.DuplicateResources;
import com.backEnd.Inventory.management.Exception.ResourceNotFound;
import com.backEnd.Inventory.management.Jpa.ItemJpaDataAccessService;
import com.backEnd.Inventory.management.Model.Item;
import com.backEnd.Inventory.management.RegistrationRequest.ItemRegistrationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class ItemService {
    public ItemDao itemDao;

    public ItemService( @Qualifier("jpa") ItemDao itemDao) {
        this.itemDao = itemDao;
    }

    public List<Item> getAllItems() {
        return itemDao.getAllItems();
    }
    public void addItem(ItemRegistrationRequest request) {
        if (itemDao.existsByNameAndType(request.name(), request.type())) {
            throw new DuplicateResources("this item with this name and type already exists");
        } else if (!itemDao.isValidDimensionFormat(request.dimension())) {
            throw new DuplicateResources("Dimension must be in the format 'l*l*e'");
        } else if (!itemDao.isValidDateFormat(request.date())) {
            throw new DuplicateResources("Date must be in the format 'yyyy-MM-dd");
        } else if (request.name().isEmpty()) {
            throw new ResourceNotFound("name should not be empty");
        }else if (request.type().isEmpty()) {
            throw new ResourceNotFound("type should not be empty");
        }else if (request.dimension().isEmpty()) {
            throw new ResourceNotFound("dimension should not be empty");
        }else if (request.description().isEmpty()) {
            throw new ResourceNotFound("description should not be empty");
        }else if (request.price()==0) {
            throw new ResourceNotFound("price should not be empty");
        }else if (request.date().isEmpty()) {
            throw new ResourceNotFound("date should not be empty");
        }else if (request.quantity()==0) {
            throw new ResourceNotFound("quantity should not be empty");
        }
        Item item = new Item(request.name(),
                request.type(),
                request.dimension(),
                request.description(),
                request.price(),
                request.date(),
                request.quantity());
        itemDao.addItem(item);

    }
    public Item getItemById(int id) {
        return itemDao.getItemById(id).orElseThrow(() -> new ResourceNotFound("Member with id [%s] not found".formatted(id)));
    }

    public void deleteItem(int id) {
        Item item = itemDao.getItemById(id).orElseThrow(() -> new ResourceNotFound("Member with id [%s] not found".formatted(id)));
        itemDao.deleteItem(item.getId());
        }

}
