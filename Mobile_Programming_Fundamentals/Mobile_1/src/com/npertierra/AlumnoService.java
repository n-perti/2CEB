package com.npertierra;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class AlumnoService {
    private Repository repository;

    public AlumnoService(){
        this.repository = new Repository();
    }

    public List<Alumno> findAll() {
        return repository.findAll();
    }

    public Optional<Alumno> findById(int id){
        return repository.findById(id);
    }

    public void save(Alumno alumno){
        repository.save(alumno);
    }

    public void deleteById(int id){
        repository.deleteById(id);
    }

    // Use Cases

    public List<Alumno> findByNameStartingWith(String... prefixes){
        return repository.findAll().stream()
                .filter(alumno -> {
                    for (String prefix : prefixes) {
                        if (alumno.getNombres().startsWith(prefix)) return true;

                    } return false;
                })
                .collect(Collectors.toList());
    }

    public long countAlumnos(){
        return repository.findAll().stream().count();
    }

    public List<Alumno> findByNotaGreaterThanAndCurso(double nota, String curso){
        return repository.findAll().stream()
                .filter(alumno -> alumno.getNota() > nota && alumno.getNombreCurso().equalsIgnoreCase(curso))
                .collect(Collectors.toList());
    }

    public List<Alumno> getFirstNAlumnos (int n){
        return repository.findAll().stream().limit(n).collect(Collectors.toList());
    }

    public Optional<Alumno> findAlumnoWithMinEdad() {
        return repository.findAll().stream().min(Comparator.comparingInt(Alumno::getEdad));
    }

    public Optional<Alumno> findAlumnoWithMaxEdad() {
        return repository.findAll().stream().max(Comparator.comparingInt(Alumno::getEdad));
    }

    public Optional<Alumno> findFirstAlumno(){
        return repository.findAll().stream().findFirst();
    }

    public List<Alumno> findByCursoEndingWith(String suffix){
        return repository.findAll().stream()
                .filter(alumno -> alumno.getNombreCurso().endsWith(suffix))
                .collect(Collectors.toList());
    }

    public List<Alumno> findByCursoContaining(String character){
        return repository.findAll().stream()
                .filter(alumno -> alumno.getNombreCurso().contains(character))
                .collect(Collectors.toList());
    }

    public List<Alumno> findByNameLenghtGreatherThan(int lenght){
        return repository.findAll().stream()
                .filter(alumno -> alumno.getNombres().length() > lenght)
                .collect(Collectors.toList());
    }

    public List<Alumno> findByNameStartingWithAndLenght(String prefix, int lenght){
        return repository.findAll().stream()
                .filter(alumno -> alumno.getNombres().length() <= lenght)
                .filter(alumno -> alumno.getNombres().startsWith(prefix))
                .collect(Collectors.toList());
    }
}

