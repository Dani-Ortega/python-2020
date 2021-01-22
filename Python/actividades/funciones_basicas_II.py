# 1) Cuenta regresiva : crea una función que acepte un número como entrada. Devuelve una nueva lista que cuenta hacia atrás en uno, 
#    desde el número (como el elemento 0) hasta 0 (como el último elemento).
#    Ejemplo: la cuenta regresiva (5) debería devolver [5,4,3,2,1,0] ****CONSULTAR AL PROFE - NO FUNCA *listooo

def regresivo(array):
    count = []
    for x in range(array, 0, -1):
        count.append(x)
        return count
print (regresivo(10))

#*****************************#

def regresivo(array):
    for x in range(array, -1, -1):
        print(x)

print(regresivo(10))

# 2) Imprimir y volver : crea una función que recibirá una lista con dos números. Imprima el primer valor y devuelva el segundo.
#    Ejemplo: print_and_return ([1,2]) debería imprimir 1 y devolver 2

def print_and_return(array):
    print(array[0])
    return array[1]
print (print_and_return([1,2]))

# 3) First Plus Length : crea una función que acepta una lista y devuelve la suma del primer valor de la lista más la longitud de la lista.
#    Ejemplo: first_plus_length ([1,2,3,4,5]) debería devolver 6 (primer valor: 1 + longitud: 5)

def first_and_len (array):
    return array[0] + len(array)
print(first_and_len([1,2,3,4,5,6,7,8,9,10]))

# 4) Valores mayores que el segundo : escribe una función que acepte una lista y crea una nueva lista que contenga solo los valores de la 
#    lista original que sean mayores que su segundo valor. Imprima cuántos valores son y luego devuelva la nueva lista. Si la lista tiene 
#    menos de 2 elementos, haga que la función devuelva False
#    Ejemplo: values_greater_than_second ([5,2,3,2,1,4]) debería imprimir 3 y devolver [5,3,4]
#    Ejemplo: values_greater_than_second ([3]) debería devolver False  *****CONSULTAR AL PROFE - NO FUNCAAA *listou

def values_greater_than_second(array):
    count = []
    if len(array) < 2:
        return False
    for x in array:
        if x > array[1]:
            count.append(x)
    return count

print(values_greater_than_second([5,2,3,2,1,4]))

# 5) Esta longitud, ese valor : escribe una función que acepte dos enteros como parámetros: tamaño y valor. 
#    La función debe crear y devolver una lista cuya longitud es igual al tamaño dado y cuyos valores son todos los valores dados.
#    Ejemplo: length_and_value (4,7) debería devolver [7,7,7,7]
#    Ejemplo: length_and_value (6,2) debería devolver [2,2,2,2,2,2] ****CONSULTAR AL PROFE

def length_and_value(length, value):
    array = []
    for x in range():
        array.append()
    return(array)

print(len_and_val(5, 10))

#-------------------------------------#

def length_and_value(length, value):
    for x in range(0, 1):
        print(value)
        
(length_and_value(6, 2))



