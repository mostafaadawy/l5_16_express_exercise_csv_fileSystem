Working With Data
Remaining Time -0:00
1x

File System is one of the core node.js modules. It's a larger module and requires import for use. Working with the file system allows you to access files within your system, and then on the server once the project is launched. It only allows access to the local file system, not users' file systems.

The File System Module also allows us to work with data by creating, delete, reading, and writing to files.

File System is almost entirely asynchronous by default, but there are some methods that are synchronous and should only be used when first opening a file such as wanting to have a file read before the rest of the code runs. Otherwise, the remainder of the file system module is asynchronous. To avoid using callbacks, we can use the File System Promises API which allows the asynchronous methods to return promises.

import {promises as fsPromises} from fs;
// or
import {promises as fs} from fs;

Where Do We Get Data?

With an application, there are several ways of working with data. The most basic is application memory, where you save data to variables. You're also likely familiar with external APIs where you can read external data from someone else's API. If you've worked with frontend frameworks, you're also likely familiar with local storage which is data saved to your browser across multiple sessions and cleared with clear cache.

The more complex way of working with data involves saving data to an external file. With Node.js there are two ways of doing this, through File System, or through a database. We'll be using File System for data storage for the remainder of this lesson.
File System vs Database

Technically, databases are just files. If you've ever tried to look at an SQL file, you may have seen this in action. They can be single files containing gigabytes of text data. So why use a database when it's ultimately a file as well?

With Databases the content is structured, can be relational, and indexed. With File System, you can only control where you write to the file, and where you read from the file, so File System is only good for simple data storage.
File System vs Database

File System vs Database
Using File System to Open and Write Files
Remaining Time -3:10
1x

Writing files is one of the most useful tasks when working with File System. Not only can you write to a file, but you can also create a file. There are two ways of writing files. You can open the file first, then write to it which is useful when you need to perform other operations on the file as well. You can also just write the file without opening it which is useful when writing is the only function you wish to perform, but you're not concerned about overwriting data that is already there.
File System Flags

File System Flags are used for identifying read/write operations available when opening a file.

    r - allows for the reading of a file
    r+ - allows for the reading and writing of a file, will overwrite content in the file
    w+ - allows for the reading and writing of a file, will create a file if it does not yet exist
    a - allows for reading and writing of a file and will append new content to the end of the file, not overwriting current content
    a+ - allows for reading and writing of a file, will create a file if it does not yet exist, and will append new content to the end of the file, not overwriting current content

Writing to a File

    .open() - Used to open a file. Takes a filename and flag as arguments.

const writeData = async () => {
  const myFile = await fsPromises.open('myfile.txt', a+);
}

    .write() - Used to write to a file that is already open. Takes data, and options as arguments.

const writeData = async () => {
  const myFile = await fsPromises.open('myfile.txt', a+);
  await myFile.write('add text');
}

    .writeFile() - Used to write to a file, overwriting any content that may already exist in the file. Takes a filename, data, and options as arguments.

const writeData = async () => {
  const myFile = await fsPromises.writeFile('myfile.txt', 'add text');
}

Reading, Moving, Renaming and Deleting Files

    .read() - Used to read a file. The file must be opened first. Allows for reading only a portion of a file, but requires the creation of a buffer to do so. Takes a buffer and options as arguments.

const readData = async () => {
  const buff = new Buffer.alloc(26);
  const myFile = await fsPromises.open('myfile.txt', a+);
  await myFile.read(buff, 0, 26);
  console.log(myFile);
}

    .readFile() - Used to read the entire contents of a file. Takes a path and options as arguments. Is the preferred method for reading files when the entire content needs to be read.

const readData = async () => {
  const myFile = await fsPromises.readFile('myfile.txt', 'utf-8');
  console.log(myFile);
}

    .rename() - Used to rename or move a file. Takes the old file path and new file path as arguments.

const moveData = async () => {
  await fsPromises.rename('old-name.txt', 'new-name.txt');
}

    .mkdir() - Used to make new directories. Takes a directory path as an argument.

const makeDir = async () => {
  await fsPromises.mkdir('src');
}

    .unlink() - Used to remove a file. Takes a file path as an argument.

const removeFile = async () => {
  await fsPromises.unlink('myFile.txt');
}

    .rmdir() - Used to remove an empty directory. Takes a directory path as an argument.

const removeFile = async () => {
  await fsPromises.rmdir('src');
}

For removing directories that contain files without needing to remove the files first, it's easiest to use a third-party module such as rimraf.
Further Reading

Official documentation from Node.js on the File System module.

A tutorial on using the file system from Digital Ocean: How to Work With Files Using the FS Module in Node.js.
