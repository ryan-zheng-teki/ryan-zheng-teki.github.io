## This is my personal technical blogs. It uses React,Typescript and Webpack


## In order to write those blogs with Rich Text Editor or with Markdown. Either I have to

create a similar markdown editor similar to gitbook. Or I could write a rich text editor after doing
the editing, I could save the content in harddisk. In Javascript its not possible. So i have to create a
tool in nodejs for processing these files. Generate one xml file which contains all the blogs 

### Design

(1) Create a NodeJS tool to convert all the blogs into one xml. This xml contains the files information for the blogs.This
    xml file also contains the creationDate of the file. Use XML file to store the blog contents.
(2) Dynamically load this xml file during user navigation
(3) Dynamically load the blog file into a React Component for showing the content.This component could be MarkdownDisplay
    or RichtextEditor Displayer.