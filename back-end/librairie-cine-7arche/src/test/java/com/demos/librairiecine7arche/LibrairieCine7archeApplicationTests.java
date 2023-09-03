package com.demos.librairiecine7arche;

import com.demos.librairiecine7arche.exception.StockException;
import com.demos.librairiecine7arche.model.Stock;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class LibrairieCine7archeApplicationTests {

    @Test
    void contextLoads() {
    }

    public static class StockTest {

        @Test
        public void testDecrementStock() throws StockException {
            Stock stock = new Stock();
            stock.setNombre(10);
            stock.decremente(3);
            Assertions.assertEquals(7, stock.getNombre());
        }


        @Test
        public void testIncrementStock() {

            Stock stock = new Stock();
            stock.setNombre(5);
            stock.incremente(2);
            Assertions.assertEquals(7, stock.getNombre());

        }

        @Test
        public void testDecrementStock_InsufficientStock() {

            Stock stock = new Stock();
            stock.setNombre(5);
            Assertions.assertThrows(StockException.class, () -> stock.decremente(7));
            Assertions.assertEquals(5, stock.getNombre());
        }
    }
}
