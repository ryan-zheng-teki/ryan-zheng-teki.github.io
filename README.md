## This is my personal technical blogs. It uses React,Typescript and Webpack


## In order to write those blogs with Rich Text Editor or with Markdown. Either I have to

create a similar markdown editor similar to gitbook. Or I could write a rich text editor after doing
the editing, I could save the content in harddisk. In Javascript its not possible. So i have to create a
tool in nodejs for processing these files. Generate one xml file which contains all the blogs 

### Design
(1) All the technical blogs are written in Markdown files. Inside the specific folders. I created a nodejs npm package folder-to-xml
to convert the folder structure dynamically into xml file.
(2) When React is starting, it reads the xml files. And Render the categories based on the tree structure for folder structure.
(3) When user click a folder which contains files, React will import those files dynamically into Client cache.
(4) I used serviceWorker thread to import Md Files before hand. And then these files are pushed to the UI thread for rendering. I stored the files 
in IndexDB for client caching.

