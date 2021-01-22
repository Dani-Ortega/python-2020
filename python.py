#qué es un array
#conjunto de datos, ordenados segun su ingreso, separados por coma (,), en []

lista_pares = [2, 4, 6, 8, 0]

print(lista_pares) #[2,4,6,8,0]

#todas comienzan en la posicion cero
print (lista_pares[0]) #2

#acceder al ultimo elemento
print(lista_pares[len(lista_pares)-1]) #0
print(lista_pares[-3])

#tamaño de una lista 'len'(arreglo)
print(len(lista_pares)) #5

#arreglo vacio = 0
arreglo = []


#secciones de lista
print (lista_pares[3:]) #[8,0] imprime de la posicion 3 en adelante considerando la posicion mencionada
print (lista_pares[:3]) #[2,4,6] imprime todo los datos qntes de la posicion mencionada, no considera la posicion que se menciona
print (lista_pares[:]) # [2,4,6,8,0]

arreglo = lista_pares #igualando a la lista
arreglo2 = lista_pares[:] #obteniendo los valores del arreglo
print(arreglo) #[2,4,6,8,0]
print (arreglo2) #[2,4,6,0] #no recibio cambios

#modificar un valor de la lista
lista_pares[2] = 5
print (lista_pares) #[2,4,5,8,0]

#agregar valor a un arreglo 
arreglo.append(1)
print arreglo #[2,4,5,8,0,1]














