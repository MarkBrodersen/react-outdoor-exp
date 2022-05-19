/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import useFetch from "./useFetch";
const Header = () => {
  const styles = {
    image: css`
      width: 200px;
      height: 200px;
    `,
  };
  const { data: sections } = useFetch("http://localhost:3001");
  return (
    <section>
      {sections.map((section) => (
        <article>
          <img
            css={styles.image}
            src={section.header.image}
            alt="placeholder"
          />
          <h1>{section.header.title[0]}</h1>
          <p>{section.header.body[0]}</p>
        </article>
      ))}
    </section>
  );
};

export default Header;
