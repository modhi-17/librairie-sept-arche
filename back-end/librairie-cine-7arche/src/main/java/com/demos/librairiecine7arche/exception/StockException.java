package com.demos.librairiecine7arche.exception;

public class StockException extends RuntimeException{
    private String errorCode;

    // exception liée au stock prend un message et un code d'erreur en tant que paramètres.
    //fournit une méthode d'accès getErrorCode() pour obtenir le code d'erreur associé à l'exception.
    public StockException(String message, String errorCode) {
        super(message);
        this.errorCode = errorCode;
    }

    public String getErrorCode() {
        return errorCode;
    }

}

