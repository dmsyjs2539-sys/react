import styles from "./Box.module.css";

interface BoxProps {
  readonly title: string
  readonly description: string
  readonly imageSrc: string
  readonly imageAlt: string
  readonly variant: "read" | "organize" | "remember"
}

export function Box({title,description,imageSrc,imageAlt,variant}:BoxProps){
  return(
    <article className={styles.feature_box} data-variant={variant}>
      <div className={styles.feature_box_text}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.feature_box_image}>
        {/* imageAlt는 그림을 볼 수 없는 사람에게 그림의 뜻을 말로 알려 줍니다. */}
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </article>
  )
}