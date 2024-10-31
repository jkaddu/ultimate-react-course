import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first location by clicking on a city anywhere on the map." />
    );

  const countries = cities.reduce((arr, city) => {
    if (arr.map((el) => el.country).includes(city.country))
      return { ...arr, country: city.country, emoji: city.emoji };
    else return arr;
  }, []);

  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </div>
  );
}
