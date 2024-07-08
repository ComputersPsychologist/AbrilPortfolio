'use client'

import styles from "./page.module.css";
import SectionAbout from "@/components/SectionAbout/SectionAbout";
import Main from "@/components/Main/Main";
import SectionPW from "@/components/SectionPW/SectionPW";
import SectionPortfolio from "@/components/SectionPortfolio/SectionPortfolio";
import useIsLoading from "@/hooks/useIsLoading";
import Preloader from "@/components/Preloader/Preloader";

export default function Home() {
  
  const { isLoading, setIsLoading } = useIsLoading()

  return (
    <>
      {
        isLoading 
        ? 
          <Preloader />
        :
          <>
            <Main />
            <SectionAbout />
            <SectionPW />
            <SectionPortfolio />
          </>
      }
    </>
  )
}
