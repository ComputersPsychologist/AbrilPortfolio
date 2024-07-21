import Gallery from "@/components/Gallery/Gallery";
import styles from "./page.module.css"

export default function Page () {
  
  const imageCollection = [
    { title: "image" , url: "/gal1/1.jpg"},
    { title: "image2" , url: "/gal1/2.jpg"},
    { title: "image3" , url: "/gal1/3.jpg"},
    { title: "image4" , url: "/gal1/4.jpg"},
    { title: "image5" , url: "/gal1/5.jpg"},
    { title: "image6" , url: "/gal1/6.jpg"}
  ]
  
  return (
    <Gallery title={"Ciudad Autómata"} images={imageCollection} />
  )
}