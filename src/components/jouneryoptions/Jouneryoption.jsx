import Header from "../header-footer/Header";
import Heading from "./Jounery option 1/Heading";
import Jrop1Heading from "./Jounery option 1/Jrop1Heading";
import Jrop1discription from "./Jounery option 1/Jrop1discription";
import Outdoor from "./Jounery option 1/Outdoor";

import Jrop1outdoor from "./Jounery option 1/Jrop1outdoor";
import BookOp1 from "./Jounery option 1/BookOp1";
import Map from "./Jounery option 1/Map";

// Jouney 2
import Jrop2Heading from "./Jounery option 2/Jrop2Heading";
import Jrop2discription from "./Jounery option 2/Jrop2discription";
import Outdoorjr2 from "./Jounery option 2/Outdoor";
import Footer from "../header-footer/FooterNew";
import Jrop2outdoor from "./Jounery option 2/Jrop2outdoor";
import BookOp2 from "./Jounery option 2/BookOp2";

// Journey 3

import Jrop3Heading from "./Jounery option 3/Jrop3Heading";
import BookOp3 from "./Jounery option 3/BookOp3";

// Journey 4
import Jrop4Heading from "./Jounery option 4/Jrop4Heading";
import BookOp4 from "./Jounery option 4/BookOp4";
import AddExpriences from "./Jounery option 4/AddExpriences";
import Cta from "../Home/Cta";
function Jouneryoption() {
  return (
    <div>
      <Header />
      <Heading />

      <Jrop1Heading />
      <Map />
      <Jrop1discription />
      <Outdoor />
      <Jrop1outdoor />
      <BookOp1 />

      {/* Journey 2 */}
      <Jrop2Heading />
      <Map />
      <Jrop2discription />
      <Outdoorjr2 />

      <Jrop2outdoor />
      <BookOp2 />
      {/* Journey 3 */}
      <Jrop3Heading />
      <Map />
      <BookOp3 />

      {/* Journey 4  */}
      <Jrop4Heading />
      <Map />
      <BookOp4 />
      <AddExpriences />
      <Cta />
      <Footer />
    </div>
  );
}

export default Jouneryoption;
