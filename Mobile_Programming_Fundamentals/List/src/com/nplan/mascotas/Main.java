package com.nplan.mascotas;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Crear una lista de animals
        List<Animal> pets = new ArrayList<>();
        pets.add(new Animal(1, "Max", "Labrador", 5));
        pets.add(new Animal(2, "Bella", "Poodle", 3));
        pets.add(new Animal(3, "Charlie", "Bulldog", 4));
        pets.add(new Animal(4, "Luna", "Beagle", 2));

        // Mostrar menú de opciones
        Scanner scanner = new Scanner(System.in);
        System.out.println("Elige el criterio de ordenamiento:");
        System.out.println("1. Por ID");
        System.out.println("2. Por Nombre");
        System.out.println("3. Por Raza");
        System.out.println("4. Por Edad");
        int opcion = scanner.nextInt();

        // Ordenar la lista según la opción seleccionada
        switch (opcion) {
            case 1:
                pets.sort(Comparator.comparingInt(Animal::getId));
                break;
            case 2:
                pets.sort(Comparator.comparing(Animal::getName));
                break;
            case 3:
                pets.sort(Comparator.comparing(Animal::getRace));
                break;
            case 4:
                pets.sort(Comparator.comparingInt(Animal::getAge));
                break;
            default:
                System.out.println("Opción no válida. Mostrando sin ordenar.");
        }

        // Imprimir la lista ordenada
        System.out.println("Lista de animals:");
        for (Animal mascota : pets) {
            System.out.println(mascota);
        }
    }
}