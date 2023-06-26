import { useState } from "react";
import people from "./data";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { RiDoubleQuotesR } from "react-icons/ri";

const App = () => {
  const [person, setPerson] = useState(0);
  const { name, job, image, text } = people[person];

  // const checkNumber = (number) => {
  //   if (number > people.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return people.length - 1;
  //   }
  //   return number;
  // };

  const nextPerson = () => {
    setPerson((currentPerson) => {
      const newPerson = (currentPerson + 1) % people.length;

      return newPerson;
    });
  };

  const prevPerson = () => {
    setPerson((currentPerson) => {
      const newPerson = Math.abs((currentPerson - 1) % people.length);

      return newPerson;
    });
  };

  const randomPerson = () => {
    let randomPerson = Math.floor(Math.random() * people.length);
    if (randomPerson === person) {
      randomPerson = (randomPerson + 1) % people.length;
    }

    return setPerson(randomPerson);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <RiDoubleQuotesR />
          </span>
        </div>
        <h3 className="author">{name}</h3>
        <h4 className="job">{job}</h4>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <HiChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <HiChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          random user
        </button>
      </article>
    </main>
  );
};
export default App;
