package com.backEnd.Inventory.management.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT)
public class DuplicateResources extends RuntimeException {
    public DuplicateResources(String message) {
        super(message);
    }
}
