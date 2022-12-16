import styles from './Footer.module.scss';
import { Style } from '../../constants/Style';
import trophy from '../../icons/trophy.svg';

export const Footer = () => {
  return (
    <footer
      className={`container px-4 py-16 bg-gray-100 border-t ${styles.footer}`}
    >
      <div className="container mx-auto max-w-[320px]">
        <img className="mx-auto w-[32px] h-[32px]" src={trophy} alt="Trophy" />
        <h2 className={Style.h2}>Highscore</h2>
        <ol className="list-decimal list-inside">
          <li>Username</li>
          <li>Username</li>
          <li>Username</li>
          <li>Username</li>
          <li>Username</li>
        </ol>
      </div>
    </footer>
  );
};
