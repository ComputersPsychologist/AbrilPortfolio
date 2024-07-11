'use client'

import styles from "./page.module.css";
import SectionAbout from "@/components/SectionAbout/SectionAbout";
import Main from "@/components/Main/Main";
import SectionPW from "@/components/SectionPW/SectionPW";
import SectionPortfolio from "@/components/SectionPortfolio/SectionPortfolio";
import useIsLoading from "@/hooks/useIsLoading";
import Preloader from "@/components/Preloader/Preloader";
import Footer from "@/components/footer/Footer";

export default function Home() {
  
  const { isLoading, setIsLoading } = useIsLoading()

  const cards = [
    { title: 'Buenos Aires', img: '/abril2.jpg' },
    { title: 'Montevideo', img: '/abril2.jpg' },
    { title: 'New York', img: '/abril2.jpg' },
    { title: 'Mar del plata', img: '/abril2.jpg' },
  ]

  return (
    <>
      {
        isLoading ? 
          (
            <Preloader />
          )
        : 
          (
            <>
              <Main />
              <SectionAbout />
              <SectionPW articles={cards} />
              <SectionPortfolio />
              <Footer />
            </>
          )
      }
    </>
  )
}
