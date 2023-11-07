import { FiStar } from "react-icons/fi";
import Style from "./style.module.scss";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../providers/UserContext";
import { ReviewCard } from "./ReviewCard";
import { MovieContext } from "../../../providers/MovieContext";

export const HomeList = () => {
    const { getUsers } = useContext(UserContext);
    const { currentMovieReviews } = useContext(MovieContext);

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <ul className={`${Style.avaliationList}`}>
            {currentMovieReviews && currentMovieReviews.length > 0 && currentMovieReviews.map(review => <ReviewCard key={review.id} review={review} />)}
            {/* <li>
                <p className={`buttonSmall round ${Style.icon}`}>J</p>
                <p className={`title1-mobileB`}><FiStar color="var(--yellow)" /> 5.0</p>
                <p className={`paragraph ${Style.text}`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                <p className={`title3`}>José da Silva</p>
            </li>
            <li>
                <p className={`buttonSmall round ${Style.icon}`}>M</p>
                <p className={`title1-mobileB`}><FiStar color="var(--yellow)" /> 5.0</p>
                <p className={`paragraph ${Style.text}`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                <p className={`title3`}>Maria da Silva</p>
            </li>
            <li>
                <p className={`buttonSmall round ${Style.icon}`}>J</p>
                <p className={`title1-mobileB`}><FiStar color="var(--yellow)" /> 5.0</p>
                <p className={`paragraph ${Style.text}`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                <p className={`title3`}>Josefine da Silva</p>
            </li>
            <li>
                <p className={`buttonSmall round ${Style.icon}`}>M</p>
                <p className={`title1-mobileB`}><FiStar color="var(--yellow)" /> 5.0</p>
                <p className={`paragraph ${Style.text}`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                <p className={`title3`}>Maria da Silva</p>
            </li> */}
        </ul>
    )
}