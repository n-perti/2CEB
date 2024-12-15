package com.nplan.streams;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;

public class Main {
    public static void main(String[] args) {
        List<Integer> myList = Arrays.asList(1, 5, 8, 7, 3, 10, 34, 28, 24);

        Map<Boolean, List<Integer>> partitionedNumbers = myList.stream()
                .collect(Collectors.partitioningBy(number -> number % 2 == 0));

        System.out.println("Even numbers: " + partitionedNumbers.get(true));
        System.out.println("Odd numbers: " + partitionedNumbers.get(false));

        List<Integer> myList_2 = Arrays.asList(1, 5, 8, 7, 3, 10, 34, 28, 24);
    }
}
