import Card from "./card"
export default {
    title : "Components/Card",
    component : Card,

    argTypes : {
        heading  : { 
          control :  "text"

          
        },
        desc : {
            control : "text"
        },
        btn : {
            control : "text"
        },

    },
};
export const Default = {
    args : {
        heading : "Learn NextJs",
        desc : " React is a JavaScript library used to build user interfaces.",
        btn : "Learn more"
    }
};
export const Second = {
    args : {
        heading : "Learn Js",
        desc : " JavaScript is used to make websites interactive.",
        btn : "Learn more"
    }
};