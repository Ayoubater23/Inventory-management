package com.backEnd.Inventory.management.RegistrationRequest;

import java.time.LocalDate;
import java.util.Date;

public record ItemRegistrationRequest(String name,
                                      String type,
                                      String dimension,
                                      String description,
                                      float price,
                                      String date,
                                      int quantity) {

}
