package com.nplan.maps;

import java.sql.SQLOutput;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class Main {

    public static void main(String[] args) {

        Map<Integer, String> map = new HashMap<>();

        map.put(1, "Manzana");
        map.put(1, "Banana");
        map.put(1, "Tomate");
        map.put(1, "Fresa");
        map.put(1, "Narnaja");
        map.put(1, "Lima");

        Iterator<Integer> iterator = map.keySet().iterator();
        while(iterator.hasNext()){
            Integer key = iterator.next();
            System.out.println(key + " – " + key + " -> " + map.keySet());
        }

    }
}
