import "@/components/home/Inspiration.scss";

import jumping from "@/public/assets/images/jumping-man-1868471.jpg";
import hat from "@/public/assets/images/hat.jpeg";
import srsly from "@/public/assets/images/srsly-2315303.jpg";
import cmpnt from "@/public/assets/images/cmptn-3679044.jpg";

import Image from "next/image";

export const Inspiration = () => {
  return (
    <div className="inspiration-box">
      <h2 className="inspiration-title">Find your inspiration</h2>
      <Image
        className="inspiration-image"
        width={400}
        height={600}
        src={hat}
        alt="A young man jumping from a car"
      />
      <Image
        className="inspiration-image"
        src={srsly}
        width={400}
        height={600}
        alt="A young man with srsly text on his t-shirt"
      />
      <Image
        className="inspiration-image"
        src={cmpnt}
        width={400}
        height={600}
        alt="A girl with compton text on her t-shirt"
      />
    </div>
  );
};
