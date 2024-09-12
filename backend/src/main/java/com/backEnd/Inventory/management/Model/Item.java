package com.backEnd.Inventory.management.Model;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;

@Entity

public class Item {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "customer_id_sequence"
    )
    @SequenceGenerator(name = "item_id_sequence",
            sequenceName = "item_id_sequence"
    )
    private int id;
    @Column(nullable = false)
    @Size(max = 50)
    private String name;
    @Size(max = 50)
    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private String dimension;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    @DecimalMax(value = "10000.00")
    private float price;
    @Column(nullable = false)

    @JsonFormat(pattern = "yyyy-MM-dd")
    private String date;
    @Max(value = 1000)
    @Column(nullable = false)
    private int quantity;

    public Item(int id, String name, String type, String dimension, String description, float price, String date, int quantity) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.dimension = dimension;
        this.description = description;
        this.price = price;
        this.date = date;
        this.quantity = quantity;
    }

    public String getDimension() {
        return dimension;
    }

    public void setDimension(String dimension) {
        this.dimension = dimension;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Item(String name, String type, String dimension, String description, float price, String date, int quantity) {
        this.name = name;
        this.type = type;
        this.dimension = dimension;
        this.description = description;
        this.price = price;
        this.date = date;
        this.quantity = quantity;
    }

    public Item() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getString() {
        return date;
    }

    public void setString(String date) {
        this.date = date;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", date=" + date +
                ", quantity=" + quantity +
                '}';
    }
}
