// If just raw javascript use a .js file. For JSX use the .jsx files. Since the file is contained inside a React project it can regonginse JSX within a .js file but it is best practice to use the correct file type so that developers knwo what to expect in the file. 

// import React from "react" allows the code below this to make use of react JavaScript libraries and recognise the code as using react syntax. note that "react" isn't give a filepath. In cases where a filepath isn't specified it will be assumed that it is imported from the node modules folder containing the javascript packages.
import React from "react";
// in this component I need to import another component "Header2" that I nested inside the "Header" component.
import Header2 from "./Header2"

// The below "Header" needs to be capitalised to make sure it is recognised as a component. Line 7 is the component. For good practice we use one component per file. It can be possible to have multiple components in a file. 
function Header() {
 return(
    //  enter HTML here.There can only be one parent element in a react component. Wrap them in a div or a react fragment "<> </>" "<React.Fragment> </React.Fragment>" (long one is used for assigning unique properties to be discussed later)  It is best to use react fragments as this wrapping is their only purpose while react fragments are only used to hold things and do not themselves have properties. 
    <>
    <div><h1>Header 1</h1></div>
    <Header2/>
    </>
 );
}
// functional component called header created. 
export default Header;
// export deafult followed by the component name means that unless the request specifies something specific it will export the Header component otehriwse it would import everything. Without the export method the componet cannot be used outside of the file.  