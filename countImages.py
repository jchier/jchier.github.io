import os

directory = "./source"

onlyfiles = next(os.walk(directory))[2] 

fo = open("count.txt", "w")
fo.write(str(len(onlyfiles)))
fo.close()


