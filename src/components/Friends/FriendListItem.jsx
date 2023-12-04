import css from 'components/Friends/FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? css.online : css.offline;

  return (
    <li className={css.item}>
      <span className={`${css.status} ${statusClass}`} />
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
