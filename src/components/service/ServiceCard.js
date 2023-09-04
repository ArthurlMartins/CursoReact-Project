import { BsFillTrashFill } from 'react-icons/bs'
import styles from '../project/ProjectCard.module.css'

function ServiceCard({id, name, cost, description, handleRemove}) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Custo total:</span> R${cost}
                <p>{description}</p>
                <div className={styles.project_card_actions}>
                    <button onClick={remove}>
                        <BsFillTrashFill />
                        Excluir
                    </button>
                </div>
            </p>
        </div>
    )
}

export default ServiceCard