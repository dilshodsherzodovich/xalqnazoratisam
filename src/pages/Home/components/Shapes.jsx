import AnimatedShape from "./AnimatedShape";
import circle from "@assets/images/bubble.png";
import circle2 from "@assets/images/bubble-38.png";

function Shapes() {
  return (
    <div className="shapes">
      <AnimatedShape
        shape={circle}
        className="absolute top-0  left-0 opacity-60 hidden lg:block"
      />
    </div>
  );
}

export default Shapes;
