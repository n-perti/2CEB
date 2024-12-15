package com.lm2a.interfaz.ejercicio_1;

public class console implements playable{
    @Override
    public void turn_on() {
        System.out.println("Turned on");
    }

    @Override
    public void play() {
        System.out.println("Playing");
    }
}
