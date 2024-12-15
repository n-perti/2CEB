package com.nplan.singleton;

public class Singleton {
    private static Singleton instance;

    private Singleton() {
        if(instance == null) {
            instance = new Singleton()
        }
        }
    }
}
