import AppNav from "../components/AppNav";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <AppNav />
      <Sidebar />
      <Map />
      <h1>AppLayout</h1>
    </div>
  );
}
