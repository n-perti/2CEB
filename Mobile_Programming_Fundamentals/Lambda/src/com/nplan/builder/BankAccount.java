package com.nplan.builder;

public class BankAccount {

    private long accountNumber;
    private String owner;
    private double balance;
    private String branch;
    private double interest_rate;

    public static class Builder {
        private long accountNumber;
        private String owner;
        private double balance;
        private String branch;
        private double interest_rate;

        public Builder(long accountNumber) {
            this.accountNumber = accountNumber;
        }

        public Builder owner(String owner) {
            this.balance = balance;
        }

        public Builder branch(String branch) {
            this.branch = branch;
        }

        public  BankAccount
    }

    private BankAccount(){

    }
}
