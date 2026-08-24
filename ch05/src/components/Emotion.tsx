import { css } from "@emotion/css";

export default function Emotion() {
  const active =false;
  return (
    <>
      <button className={css`
          background:${active ? 'red':'blue'};
          border-radius: 3px;
          border:2px solid #bf4f74;
          color: #bf4f74;
          margin: 0 1em;
          padding: 0.25em 1em;
        `}>이모션 클릭미</button>
    </>
  )
}