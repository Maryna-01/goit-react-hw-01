import styles from "./FriendListItem.module.css";


const FriendListItem = ({ avatar, name, isOnline }) => {
    const statusClass = isOnline ? styles.online : styles.offline;

    return (
        <div className={styles.item}>
            <span className={statusClass}></span>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </div>
    );
};

export default FriendListItem;