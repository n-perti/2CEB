package com.nplan.comparable;

import java.util.ArrayList;
import java.util.List;

public class CarProvider {

    // Static List to hold the car data
    private static List<Car> cars;

    // Static method to initialize and provide the list of cars
    public static List<Car> getCars() {
        // Initialize the list if it's null (lazy initialization)
        if (cars == null) {
            cars = new ArrayList<>();

            cars.add(new Car("Toyota", "Rav4", 27000));
            cars.add(new Car("Tesla", "M3", 12000));
            cars.add(new Car("Bmw", "Series 7", 15000));
            cars.add(new Car("Audi", "A8", 48500));
            cars.add(new Car("Porsche", "Cayenne", 59000));
        }
        return cars;
    }
}
