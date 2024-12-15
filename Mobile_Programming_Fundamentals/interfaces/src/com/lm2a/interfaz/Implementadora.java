package com.lm2a.interfaz;

public class Implementadora implements MiInterface {
    @Override
    public void m0() {
        System.out.println("Ejecutando m0");
    }

    @Override
    public String m1() {
        System.out.println("Ejecutantdo m1");
        return "vacío";
    }

    @Override
    public int m2() {
        System.out.println("Ejecutando m2");
        return 0;
    }

    @Override
    public double m3() {
        System.out.println("Ejecutando m3");
        return 0;
    }
}
