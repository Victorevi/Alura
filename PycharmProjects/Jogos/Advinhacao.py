def jogar():
    import random

    print("\n***********************************", "*Bem vindo ao Jogo da Adivinhação!*", "***********************************\n", sep='\n')

    numero_secreto = random.randrange(101) # 0 100
    total_tentativas = 0
    nivel = 0
    pontos = 1000

    print("Escolha a dificuldade.")
    print("(1) Fácil | (2) Normal | (3) Difícil\n")
    nivel = int(input("Dificuldade: "))

    while(nivel < 1 or nivel > 3):
        print("ESSE NÍVEL NÃO EXISTE, INSIRA UM NÍVEL VALIDO!\n")
        print("Escolha a dificuldade.")
        print("(1) Fácil | (2) Normal | (3) Difícil\n")
        nivel = int(input("Dificuldade: "))

    nivel_1 = nivel == 1
    nivel_2 = nivel == 2
    nivel_3 = nivel == 3

    if(nivel_1):
            total_tentativas = 20
    elif(nivel_2):
            total_tentativas = 10
    elif(nivel_3):
            total_tentativas = 5

    for rodada in range (1, total_tentativas + 1):

        print("\nTentativa {} de {}.".format(rodada, total_tentativas))
        chute = int(input("Digite um número de 0 a 100: "))

        if(chute < 0 or chute > 100):
            print("DIGITE UM NUMERO DE 0 A 100!\n")
            continue

        print(f"Você digitou {chute}.")

        acertou = chute == numero_secreto
        errou_maior = chute > numero_secreto
        errou_menor = chute < numero_secreto

        if(acertou):
            print(f"Parabéns você acertou, e ganhou {pontos} pontos!")
            break
        else:
            if(errou_maior):
                print("Que pena você errou!", "Seu chute foi maior do que o numero secreto.", sep='\n')
            elif(errou_menor):
                print("Que pena você errou!", "Seu chute foi menor do que o numero secreto.", sep='\n')
            pontos_perdidos = abs(numero_secreto - chute)
            pontos = pontos - pontos_perdidos

    print("Fim de jogo!")

if (__name__ == "__main__"):
    jogar()