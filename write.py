import sys
import os
from natsort import natsorted


def main():

    with open('numbers.txt', 'w') as file:
        for i in range(301):
            file.write(str(i) + "\n")

if __name__ == '__main__':
    main()