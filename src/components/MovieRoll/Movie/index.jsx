import styles from "./style.module.scss";
import star from "../../../assets/star.png";


export const Movie = ({ movie, handleClick }) => {

  const rating = movie.reviews.length > 0 ?
    movie.reviews.reduce((total, value) => total + value.score, 0) / movie.reviews.length :
    5;

  return (
    <div className={styles.movie}>
      <img className={styles.movieimage} src={movie.image} alt={movie.name} onClick={handleClick} />
      <div className={styles.movieinfo}>
        <p className={styles.movietype}>{movie.type}</p>
        <p className={styles.movieduration}>{`${movie.duration}m`}</p>
      </div>
      <div className={styles.movieinfo}>
        <h2 className={styles.movietitle}>{movie.name}</h2>
        <div className={styles.movierating}>
          <img src={star} />
          <span>{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}