import { MdEdit, MdDelete } from "react-icons/md";
import { FiStar } from "react-icons/fi";
import { CreateAvaliationModal } from "./HomeCardModal/CreateAvaliationModal";
import { EditAvaliationModal } from "./HomeCardModal/EditAvaliationModal";
import Style from "./style.module.scss"

export const HomeCard = ({ avaliationList, setIsVisibleCreate, isVisibleCreate, isVisibleEdit, setIsVisibleEdit }) => {

    return (
        //<div>
        // <ul >
        //     {avaliationList.map((avaliation) => (
        //         <li key={avaliation.movieId}>
        //             <p>Sua avaliação</p>
        //             <div>
        //                 <div>
        //                     <p className={`paragraph`}>{avaliation.description}</p>
        //                 </div>
        //                 <div>
        //                     <p className={`title1-mobileB`}><FiStar color="var(--yellow)" /> {avaliation.score}</p>
        //                     <button onClick={() => { setIsVisibleEdit(true); setEditingTech(avaliation) }} aria-label="edit"><MdEdit size={17} color="var(--yellow)" /></button>
        //                     <button onClick={() => techDelete(avaliation.id)} aria-label="delete"><MdDelete size={17} color="var(--yellow)" /></button>
        //                 </div>
        //             </div>
        //         </li>
        //     ))}
        // </ul>
        //</div>
        <div className={Style.myAvaliation}>
            <ul>
                <li>
                    <p>Sua avaliação</p>
                    <div>
                        <div className={Style.divAvaliation}>
                            <p className={`paragraph`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                        </div>
                        <div className={Style.noteEditRemove}>
                            <p className={`title1-mobileB`}><FiStar color="var(--yellow)" /> 5.0</p>
                            <div>
                                <button onClick={() => { setIsVisibleEdit(true); setEditingTech(avaliation) }} aria-label="edit"><MdEdit size={17} color="var(--yellow)" /></button>
                                <button onClick={() => techDelete(avaliation.id)} aria-label="delete"><MdDelete size={17} color="var(--yellow)" /></button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            {isVisibleCreate ? <CreateAvaliationModal setIsVisibleCreate={setIsVisibleCreate} /> : null}
            {isVisibleEdit ? <EditAvaliationModal setIsVisibleEdit={setIsVisibleEdit} /> : null}
        </div>
    )
}