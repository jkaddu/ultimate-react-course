import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

export default function CityList({ cities, isLoading }) {
  console.log(cities);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first location by clicking on a city anywhere on the map." />
    );
  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </div>
  );
}
