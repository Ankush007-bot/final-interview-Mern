"use client";
import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Todo from "../components/Todo/Todo";
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../app/store'
import DebouncedInput from "@/Debouncing/Debounce";
import ThrottledComponent from "@/Throttle/Throttle";
import Usecallback from "@/components/Usecallback/Usecallback";
import FunctionChaining from "@/components/functionChaining/functionChaining";
import { Closures } from "@/components/closures/Closures";
import { Promises } from "@/components/Promises/Promises";
import { Currying } from "@/components/Currying/currying";
import { EventLoop } from "@/components/EventLoop/EventLoop";
import HOF from "@/components/HOF/HOF";
 // If you are in the app directory and working with client components


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (

    <Provider store={store}>
     {/* <Todo/>
     <DebouncedInput/> */}
     {/* <ThrottledComponent/> */}
     {/* <Usecallback/> */}
     {/* <FunctionChaining/> */}
     {/* <Closures/>
     <Currying/> */}
     <Promises/>
     {/* <HOF/> */}
     {/* <EventLoop/> */}
   </Provider>



  );
}
