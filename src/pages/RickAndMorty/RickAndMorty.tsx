import { useState } from "react";
import Button from "../../components/Button/Button";
import useFetch from "../../hooks/useFetch";
import { generateRandomInteger } from "../../utils/genrateRandomInteger";
import styles from "./RickAndMorty.module.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

const RickAndMorty = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomInteger(826));
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_KEY}/character/${randomNumber}`
  );

  const handleBtnOnClick = () => setRandomNumber(generateRandomInteger(826));

  return (
    <>
      <h2 className="title">Rick And Morty</h2>
      <div className={styles.container}>
        {loading && <Loader />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {data && (
          <>
            <img src={data?.image} alt={data?.name} className={styles.img} />
            <span className={styles.name}>{data?.name}</span>
            <Button onClick={handleBtnOnClick}>
              Generate random characters
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default RickAndMorty;
