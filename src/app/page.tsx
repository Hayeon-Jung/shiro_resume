import Image from "next/image";
import styles from "./page.module.css";
import FirstResume from "./resume/FirstResume";

export default function Home() {
  return (
    <main>
      <FirstResume />
    </main>
  );
}
