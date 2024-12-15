package com.nplan.io;

import java.io.*;

public class MainEx1 {

    public static void main(String[] args) throws FileNotFoundException {
        char[] buffer = new char[100];
        try {

            Reader fileReader = new FileReader("input.txt");

            fileReader.read(buffer);
            Write newFile = new FileWriter("newFile.txt")
            System.out.println(buffer);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }
}
