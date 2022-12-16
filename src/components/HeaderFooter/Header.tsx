import logo from '../../logo.svg';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={`container px-4 py-16 bg-yellow-400 ${styles.header}`}>
      <img
        className="block mx-auto w-[120px] h-[120px]"
        src={logo}
        alt="Logo RockPS"
      />
    </header>
  );
};
