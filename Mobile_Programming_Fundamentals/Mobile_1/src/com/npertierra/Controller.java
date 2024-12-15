package com.npertierra;

public class Controller {
    private AlumnoService service;

    public Controller(){
        this.service = new AlumnoService();
    }

    public void execute(){

        // Imprimir todos aquellos alumnos cuyo nombre empieza con L o G
        System.out.println("Alumnos cuyo nombre empieza con 'L' o 'G':");
        service.findByNameStartingWith("L", "G").forEach(System.out::println);

        // Contar la cantidad de alumnos
        System.out.println("Cantidad de alumnos: " + service.countAlumnos());

        // Obtener los alumnos con notas mayores a 9 y que el curso sea PHP
        System.out.println("Alumnos con nota > 9 y curso 'PHP':");
        service.findByNotaGreaterThanAndCurso(9, "PHP").forEach(System.out::println);

        // Imprimir los primeros 2 alumnos
        System.out.println("Primeros 2 alumnos:");
        service.getFirstNAlumnos(2).forEach(System.out::println);

        // Alumno con menor edad
        System.out.println("Alumno con menor edad:");
        service.findAlumnoWithMinEdad().ifPresent(System.out::println);

        // Alumno con mayor edad
        System.out.println("Alumno con mayor edad:");
        service.findAlumnoWithMaxEdad().ifPresent(System.out::println);

        // Primer alumno de la lista
        System.out.println("Primer alumno:");
        service.findFirstAlumno().ifPresent(System.out::println);

        // Alumnos cuyo curso termina con 't'
        System.out.println("Alumnos con curso terminando en 't':");
        service.findByCursoEndingWith("t").forEach(System.out::println);

        // Alumnos cuyos cursos contienen 'a'
        System.out.println("Alumnos con cursos que contienen 'a':");
        service.findByCursoContaining("a").forEach(System.out::println);

        // Alumnos con nombres mayores a 10 caracteres
        System.out.println("Alumnos con nombres de longitud > 10:");
        service.findByNameLenghtGreatherThan(10).forEach(System.out::println);

        // Alumnos cuyo nombre empieza con 'P' y longitud <= 6
        System.out.println("Alumnos con nombre empezando en 'P' y longitud <= 6:");
        service.findByNameStartingWithAndLenght("P", 6).forEach(System.out::println);

    }
}
