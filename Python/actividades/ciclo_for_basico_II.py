# 1) Tamaño grande: dada una lista, escriba una función que cambie todos los números positivos de la lista a "big".
#    Ejemplo: biggie_size ([- 1, 3, 5, -5]) devuelve la misma lista, pero cuyos valores son ahora [-1, "big", "big", -5]
                                                    ******#NO FUNCAAAAA
def biggie_size(array):
    for x in array:
        if x < 0:
            array[x] = 'big'
    return array        

print(biggie_size([- 1, 3, 5, -5]))

# 2) Contar positivos : dada una lista de números, cree una función para reemplazar el último valor con el número de valores positivos. (Tenga en cuenta que cero no se considera un número positivo).
#    Ejemplo: count_positives ([- 1,1,1,1]) cambia la lista original a [-1,1,1,3] y la devuelve
#    Ejemplo: count_positives ([1,6, -4, -2, -7, -2]) cambia la lista a [1,6, -4, -2, -7,2] y la devuelve


def count_positives(arr):
    count = 0
    for x in range (len(arr)):
        if arr[x] > 0:
            count = count + 1
    arr[len(arr) -1] = count
    return(arr)    

print(count_positives([1,6, -4, 2, -7, -2]))

# 3) Suma total : crea una función que toma una lista y devuelve la suma de todos los valores de la matriz.
#    Ejemplo: sum_total ([1,2,3,4]) debería devolver 10
#    Ejemplo: sum_total ([6,3, -2]) debería devolver 7

def sum_total(arr):
    sum = 0
    for i in range (len(arr)):
        if arr[i] > 0
        sum = sum + arr[i]
    return sum

print(sum_total([2,2,2,2,2,2]))

# 4) Promedio : crea una función que toma una lista y devuelve el promedio de todos los valores.
#    Ejemplo: el promedio ([1,2,3,4]) debería devolver 2.5

def promedio(arr):
    count = 0
    for i in range (len(arr)):
        count = count + arr[i]
        prom = count / len(arr)
    return prom

print(promedio([1,2,3,4]))

# 5) Longitud : crea una función que toma una lista y devuelve la longitud de la lista.
#    Ejemplo: la longitud ([37,2,1, -9]) debería devolver 4
#    Ejemplo: longitud ([]) debería devolver 0

long = [4,7,8,9,53,45,3234]
def longitud(long):
    count = 0
    count = len(long)
return (long)

print(longitud(long))

# 6) Mínimo : crea una función que tome una lista de números y devuelva el valor mínimo en la lista. Si la lista está vacía, haga que la función devuelva False.
#    Ejemplo: mínimo ([37,2,1, -9]) debería devolver -9
#    Ejemplo: mínimo ([]) debería devolver False

def minimo (arr):
    if len(arr) < 0:
        return false
    else:
        min = arr[0]
        for x in range (len(arr)):
            if arr[x] < min:
                min = arr[x]
    return min

print (minimo([37,2,-5,1, -9]))

#7)  Máximo : crea una función que toma una lista y devuelve el valor máximo en la matriz. Si la lista está vacía, haga que la función devuelva False.
#    Ejemplo: máximo ([37,2,1, -9]) debería devolver 37
#    Ejemplo: máximo ([]) debería devolver False

def maximo (arr):
    if len(arr) < 0:
        return false
    else:
        max = arr[0]
        for x in range (len(arr)):
            if arr[x] > max:
                max = arr[x]
    return max

print (maximo([37,2,-5,1, -9, 987, 9834]))

#8)  Análisis final : crea una función que tome una lista y devuelva un diccionario que tenga la suma total, promedio, mínimo, máximo y longitud de la lista.
#    Ejemplo: ultimate_analysis ([37,2,1, -9]) debería devolver {'totalTotal': 31, 'promedio': 7.75, 'mínimo': -9, 'máximo': 37, 'longitud': 4}

array = [37,2,1, -9]
def ultimate_analysis (array):
    total = 0
    min = array[0]
    max = array[0]
    for i in range (len(array)):
        total = total + array[i]
        promedio = total / len(array)
    if array[i] < min:
        min = array[i]
    else:
        for x in range (len(array)):
            if array[x] > max:
                max = array[x]
    print ('total:', total)
    print ('promedio:', promedio)
    print ('mínimo:', min)
    print ('máximo:', max)
    print ('longitud:', len(array))
    
print(ultimate_analysis(array))

#9)  Lista inversa : crea una función que tome una lista y la devuelva con los valores invertidos. Haz esto sin crear una segunda lista. 
#    (Se sabe que este desafío aparece durante las entrevistas técnicas básicas).
#    Ejemplo: reverse_list ([37,2,1, -9]) debería devolver [-9,1,2,37]

array = [23, 7, 12, 684, 2, 5]
def reverse_list(array):
    return array[::-1]

print(reverse_list(array))