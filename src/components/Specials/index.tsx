import { FC, HTMLAttributes } from "react";
import { Container, Top, Cards } from "./styles";
import Button from "../Button";
import SpecialFoodCard from "../SpecialFoodCard";
import greekSalad from "../../assets/greekSalad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemonDessert.jpg";

const Specials: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props} id="menu">
      <Top>
        <h1>This weeks specials!</h1>
        <Button>Online Menu</Button>
      </Top>
      <Cards>
        <SpecialFoodCard
          imageUrl={greekSalad}
          title="Hyderabadi Chicken Biryani"
          price={150}
          description="Aromatic spices and marinated meat cooked slowly with flavorful rice, creating a dish rich in taste and depth of flavors."
        />
        <SpecialFoodCard
          imageUrl={bruchetta}
          title="Bruchetta"
          price={80}
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <SpecialFoodCard
          imageUrl={lemonDessert}
          title="Lemon Dessert"
          price={120}
          description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </Cards>
    </Container>
  );
};

export default Specials;
