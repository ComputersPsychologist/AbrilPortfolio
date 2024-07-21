import styles from "./GalleryModal.module.css"

export default function GalleryModal ({visible, setVisible, img = {}}) {

  const visibility = `${visible ? styles.visible : styles.notVisible}`

  const killModal = () => {
    setVisible(false)
  }

  return (
    <div className={`${styles.blackOut} ${visibility}`} onClick={killModal}>
      <div className={`${styles.modal} ${visibility}`}>
        <img src={img.url} alt={img.description} />
      </div>
    </div>
  )
}