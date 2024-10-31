import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  console.log(lat, lng);
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <p>
        Position: {lat}, {lng}
      </p>
    </div>
  );
}
