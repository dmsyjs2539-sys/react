import styles from "./FormComponents.module.css"

// 부모가 값과 변경 함수를 함께 주면, 입력칸과 React가 같은 값을 기억할 수 있습니다.
interface LoginFieldProps {
  readonly id: string
  readonly label: string
  readonly type: "email" | "password" | "text"
  readonly value: string
  // placeholder는 빈 입력칸에만 보이는 예시 글자입니다.
  readonly placeholder?: string | undefined
  readonly note?: string | undefined
  readonly onNoteClick?: (() => void) | undefined
  readonly onChange: (value: string) => void
}

export function LoginField({ id, label, type, value, placeholder, note, onNoteClick, onChange }: LoginFieldProps) {
  return (
    <div className={styles.login_field}>
      <div className={styles.login_field_row}>
        <label htmlFor={id}>{label}</label>
        {note === undefined ? null : onNoteClick === undefined ? (
          <span className={styles.field_note}>{note}</span>
        ) : (
          // 눌러서 동작하는 안내 문구는 span 대신 button을 써야 키보드도 누를 수 있습니다.
          <button className={styles.field_note_button} type="button" onClick={onNoteClick}>{note}</button>
        )}
      </div>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        // 브라우저에게 이메일 칸인지 비밀번호 칸인지 알려 자동 완성을 돕습니다.
        autoComplete={type === "email" ? "username" : type === "password" ? "current-password" : "name"}
        // 사용자가 입력한 새 글자만 꺼내 부모의 state에 전달합니다.
        onChange={(event) => { onChange(event.currentTarget.value) }}
      />
      
    </div>
  )
}