package com.nplan.encriptables;

public class EncryptMethods {

    public static Encriptator inversor = (text) ->
            new StringBuilder(text).reverse().toString();

    public static Encriptator VowelReplace = (text) -> {
        return text.replaceAll("[aeiouAEIOU]", "4");
    };



}
