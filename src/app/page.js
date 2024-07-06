'use client'

import styles from "./page.module.css";
import SectionAbout from "@/components/SectionAbout/SectionAbout";
import Main from "@/components/Main/Main";
import SectionPW from "@/components/SectionPW/SectionPW";

export default function Home() {
  return (
    <>
      <Main />
      <SectionAbout />
      <SectionPW />
    </>
  )
}
