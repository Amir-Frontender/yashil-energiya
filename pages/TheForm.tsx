"use client";
import { useState } from "react";
import "../scss/globals.scss";
import styles from "./page.module.scss";

import axios from "axios";

export default function TheForm() {
  async function sendForm() {
    try {
      await axios.post("http://localhost:3000/api/send-request", feedback);
    } catch (error) {
      console.log("Sending error", error);
    }
    alert(
      `Спасибо за обращение ${feedback.name}! Мы свяжемся с Вами в ближайшее время.`
    );
  }
  const [feedback, setFeedback] = useState({
    name: "",
    phone: "",
    msg: "",
  });

  return (
    <form action="" method="" className={styles.form}>
      <h1 className="title">FIKR-MULOHAZA</h1>
      <input
        className={styles.input}
        type="text"
        name="name"
        id="name"
        placeholder="F.I.SH"
        required
        value={feedback.name}
        onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
      />
      <input
        className={styles.input}
        type="text"
        name="phone"
        id="phone"
        placeholder="Telefon raqami"
        required
        value={feedback.phone}
        onChange={(e) => setFeedback({ ...feedback, phone: e.target.value })}
      />
      <textarea
        className={styles.input}
        name="msg"
        id="msg"
        placeholder="Izoh"
        required
        value={feedback.msg}
        onChange={(e) => setFeedback({ ...feedback, msg: e.target.value })}
      />
      {feedback.name && feedback.phone && feedback.msg ? (
        <button className={styles.btn} onClick={sendForm}>
          Jo'natish
        </button>
      ) : (
        <button className={styles.disabledBtn}>Jo'natish</button>
      )}
    </form>
  );
}
