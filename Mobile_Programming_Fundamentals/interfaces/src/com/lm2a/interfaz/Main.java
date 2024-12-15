package com.lm2a.interfaz;

import java.util.ArrayList;
import java.util.List;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Implementadora i = new Implementadora();


        List<MiInterface> lista = new ArrayList<>();
        lista.add(i);

        for(MiInterface mi: lista){
            System.out.println(mi.m1());
        }


    }
}