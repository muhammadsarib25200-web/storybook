// import { Component } from "react";
import Taskbox from "./taskBox";
export default {
     title: "components/TaskBox",
     component: Taskbox,
};
export const Default = {
     args: {
          tasks: [
               "Learn React",
               "Learn JavaScript",
               "Learn Python"
          ],
     },
};
export const Second = {
     args: {
          tasks: [
               "Learn HTML",
               "Learn Css",
          ],
     },
};

export const Third = {
     args : {
          tasks : ["There is no task to solve"]       
     }
};