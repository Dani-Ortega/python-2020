import random
def randInt(min= [], max= []):
    num = random.random() * 45 + 55
    return round(num)
print(randInt())                    # should print a random integer between 0 to 100
print(randInt(max=30))              # should print a random integer between 0 to 50
print(randInt(min=70))              # should print a random integer between 50 to 100
print(randInt(min=20, max=500))     # should print a random integer between 50 and 500

#resultados entregados por la shell

89
57
71
71
