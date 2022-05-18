import "./style.css";

const Travel = (props) => {
  const data = props.data;
  return (
    <div className="pageContainer">
      {data.map((section) => (
        <section className={section.styles}>
          <article key={section.id}>
            <img src={section.image} alt="Placeholder" />
            <p>{section.collectionNumber}</p>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
            <span>{section.author}</span>
          </article>
        </section>
      ))}
    </div>
  );
};

export default Travel;
