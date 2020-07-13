<?php
    /**
     * Auteur: Arthur NGAKU
     *
     * Test Algo: Ecrire une fonction Fizzbuzz qui si un nombre est divisible par 3,5, les deux ou rien. 
     * 
     */

     function fizzbuzz($num)
     {
         if(!empty($num) & is_numeric($num)){
            for ($i=1; $i <= $num; $i++) {
                if ($i % 15 == 0)
                    echo "FizzBuzz<br/>";
                else if ($i % 3 == 0)
                    echo "Fizz<br/>";
                else if ($i % 5 == 0)
                    echo "Buzz<br/>";
                else
                    echo $i."<br/>";
            } 
         }
    }

    //test
    fizzbuzz(67);
?>
 