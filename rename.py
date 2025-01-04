import sys
import os
from natsort import natsorted

def rename_files(path, extension):

    os.chdir(path)
    # print(path)

    for (i, filename) in enumerate(natsorted(os.listdir('.'))):
        os.rename(src=filename, dst='{}{}{}'.format("temp",i,extension))

    for i, filename in enumerate(natsorted(os.listdir('.'))):
        if filename.startswith("temp"):
            os.rename(filename, f"{i}{extension}")

def main():
    rename_files("./source", ".png")

if __name__ == '__main__':
    main()