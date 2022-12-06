using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("--------------- Início do programa ---------------");
            int i;
            int media = 0;
            int numero = 0;
            int [] array = new int[10];
            int [] array1 = new int[10];
            Console.WriteLine("Entre com 10 volumes numéricos inteiros: ");
            for (i=0; i < 10; i++)
            {
                array[i] = int.Parse(Console.ReadLine());
            }
            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Valores menores que zero: ");
            for (i = 0; i < 10; i++)
            {
                if (array[i] < 0)
                {
                    array1[i] = array [i];
                    Console.WriteLine(array[i]);
                }
            }
            for(i = 0; i < array1.Length; i++)
            {
                media += array1[i];
                if(array1[i] != 0)
                    numero++;
            }
            media = media / numero;
            Console.WriteLine("a média é: {0}", media);
            Console.WriteLine("------------------------FIM---------------------------");
            Console.ReadKey();
            return;
        }
    }
}