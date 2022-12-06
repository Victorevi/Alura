using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("--------------- Início do programa ---------------");
            int i, valor;
            int [] array = new int[10];
            Console.WriteLine("Entre com 10 volumes numéricos inteiros maiores que zero: ");
            for (i=0; i < 10; i++)
            {
                array[i] = int.Parse(Console.ReadLine());
                if (array[i] < 0)
                {
                    break;
                }
            }
            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Elementos no array: ");
            for (i = 0; i < 10; i++)
            {
                Console.WriteLine(array[i]);
            }
            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Valores ímpares no array: ");
            for (i = 0; i < 10; i++)
            {
                valor = array[i];
                if (array[i] % 2 == 1)
                {
                    Console.WriteLine("{0}", valor);
                }
                Console.WriteLine("Valores pares no array: ");
				else if (array[i] % 2 != 1)
				{
					Console.WriteLine("{0}", valor);
				}
            }
            Console.WriteLine("------------------------FIM---------------------------");
            Console.ReadKey();
            return;
        }
    }
}