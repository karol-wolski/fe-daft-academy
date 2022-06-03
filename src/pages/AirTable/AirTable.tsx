import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Form from "../../components/Form/Form";
import Loader from "../../components/Loader/Loader";
import useFetch from "../../hooks/useFetch";
import styles from "./AirTable.module.css";

export const LS_INPUT_KEY = "inputValue";

const AirTable = () => {
  const { data, loading, error, refetch } = useFetch(
    `${process.env.REACT_APP_AIRTABLE}`
  );

  const formOnSubmit = async (e: Event, name: any) => {
    localStorage.setItem(LS_INPUT_KEY, name);
    const newData = await fetch(`${process.env.REACT_APP_AIRTABLE}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        records: [
          {
            fields: {
              name,
            },
          },
        ],
      }),
    });

    if (newData) refetch();
  };

  return (
    <>
      <h2 className="title">Airtable</h2>
      <Form handleSubmit={formOnSubmit} />

      <section className={styles.section}>
        {loading && <Loader />}
        <h3 className={styles.section__title}>
          List of users who visited the site
        </h3>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {data && (
          <ul className={styles.list}>
            {data.records.map((el: any) => (
              <li className={styles["list__item"]} key={el.id}>
                {el.fields.name}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default AirTable;
