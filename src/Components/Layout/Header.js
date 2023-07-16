import classes from "./Header.module.css";
import MealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>FoodFusion</h1>
        <HeaderCartButton onOpen = {props.onOpen}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="a table full of nice meals" />
      </div>
    </>
  );
};

export default Header;
