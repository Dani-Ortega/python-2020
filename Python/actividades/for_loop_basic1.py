# Básico : imprime todos los enteros del 0 al 150.

for x in range(151):
    print(x)

# Múltiplos de cinco : imprime todos los múltiplos de 5 de 5 a 1,000

for x in range (0, 1000,5):
    print(x)

# Contar, Dojo Way - imprime enteros del 1 al 100. 
# Si es divisible por 5, imprima "Coding" en su lugar. 
# Si es divisible por 10, imprima "Coding Dojo".

for x in range(100):
    x +=5
    if x % 5 == 0:
        print('Coding')
    if x % 10 ==0:
        print('Coding Dojo')
    else: print(x)

#¡Uf, Eso es bastante grande!: suma enteros impares de 0 a 500,000 
# e imprime la suma final.

impar = 0
for i in range (50000):
    i += 0
    if i % 1 == 0:
        impar += i
print(impar)

# Cuenta regresiva por cuatro : imprime números positivos a partir de 2018,
# cuenta atrás por cuatro.

for x in range (2018, 0, -4):
    print (x)

#Contador flexible : establece tres variables: lowNum, highNum, mult. Comenzando en lowNum y pasando por highNum, 
# imprima solo los enteros que son múltiplos de mult. Por ejemplo, si lowNum = 2, highNum = 9 y mult = 3, 
# el bucle debe imprimir 3, 6, 9 (en líneas sucesivas) CONSULTAR AL PROFE - NO ENTENDER

lowNum = 2
highNum = 9
mult = 3



