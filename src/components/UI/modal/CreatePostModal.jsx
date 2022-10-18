import React from "react";
import styles from "./CreatePostModal.module.css";

export default function CreatePostModal({ children, visible, setVisible }) {
  const initialClasses = [styles.modal];
  if (visible) initialClasses.push(styles.active);

  const handleBackgroundClick = () => {
    setVisible(false);
  };

  return (
    <div className={initialClasses.join(" ")} onClick={handleBackgroundClick}>
      <div
        className={styles.content}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
