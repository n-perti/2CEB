package com.nplan.mascotas;

public class Animal {

    private int id;
    private String name;
    private  String race;
    private int age;

    public Animal(int id, String name, String race, int age) {
        this.id = id;
        this.name = name;
        this.race = race;
        this.age = age;
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

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "animal{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", race='" + race + '\'' +
                ", age=" + age +
                '}';
    }
}
