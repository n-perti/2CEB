package com.nplan.comparable;

public class Car implements Comparable<Car>{
    private String brand;

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getKms() {
        return kms;
    }

    public void setKms(int kms) {
        this.kms = kms;
    }

    private String model;
    private int kms;

    @Override
    public String toString() {
        return "Car{" +
                "brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", kms=" + kms +
                '}';
    }

    public Car(String brand, String model, int kms) {
        this.brand = brand;
        this.model = model;
        this.kms = kms;
    }

    @Override
    public int compareTo(Car o) {
        return model.compareTo(o.getModel());

    }
}