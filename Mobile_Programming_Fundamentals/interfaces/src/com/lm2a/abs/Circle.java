package com.lm2a.abs;

public class Circle extends Shape{
    int radius;

    public Circle(String nameFigure, String colorShape){
        super(nameFigure, colorShape);
    }

    @Override
    double calculateArea(){
        return Math.PI*Math.pow(radius, 2);
    }
}
