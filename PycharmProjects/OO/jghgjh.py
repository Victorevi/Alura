hex = [0,1]
n = int(input("Digite um núemro inteiro: "))
h = []
while n > 0:
    h.append(hex[(n % 2)])
    n = n // 2
for resultado in range(len(h)-1,-1,-1):
    print(h[resultado], end="")