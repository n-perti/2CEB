package com.nplan.generics.without;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Objects;
import java.util.function.Consumer;

public class Bag implements Iterator{

    private ArrayList list = new ArrayList();

    private int top;

    public Bag(int top) {
        this.top = top;
    }

    public void add(Object object) {
        if(list.size() <= top) {
            list.add(object);
        } else {
            throw new RuntimeException("Full list");
        }
    }
    @Override
    public Iterator iterator() {
        return list.iterator();
    }

    @Override
    public boolean hasNext() {
        return false;
    }

    @Override
    public Object next() {
        return null;
    }

    @Override
    public void remove() {
        Iterator.super.remove();
    }

    @Override
    public void forEachRemaining(Consumer action) {
        Iterator.super.forEachRemaining(action);
    }
}
