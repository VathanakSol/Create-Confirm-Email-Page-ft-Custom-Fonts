import { Inter, Suwannaphum, Lilita_One } from 'next/font/google'
import localFont from "next/font/local";

export const localCustomFont = localFont({
    src: "./fonts/Comfortaa-Regular.ttf",
    display: "swap",
    variable: "--font-comfortaa-regular",
});

export const inter = Inter({
    weight: ["400","500","600","700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const suwannaphum = Suwannaphum({
    weight: ["400","700"],
    subsets: ["khmer"],
    display: "swap",
    variable: "--font-suwannaphum",
});

export const lilita_One= Lilita_One({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-lilita_one",
});