import os

def main():

    directory = "./source"

    onlyfiles = next(os.walk(directory))[2] 
    print(str(len(onlyfiles)))
    fo = open("count.txt", "w")
    fo.write(str(len(onlyfiles)))
    fo.close()


if __name__ == '__main__':
    main()