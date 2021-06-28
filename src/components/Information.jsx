/* eslint-disable default-case */
import React, { Component } from "react";
import "../styles/Information.css";
import adidas from "../images/adidas.png";
import apple from "../images/apple.png";
import bk from "../images/bk.png";
import bp from "../images/bp.png";
import coke from "../images/coke.png";
import doritos from "../images/doritos.png";
import google from "../images/google.png";
import hbo from "../images/hbo.png";
import ibm from "../images/ibm.png";
import kfc from "../images/kfc.png";
import koolaid from "../images/koolaid.png";
import lacoste from "../images/lacoste.png";
import nasa from "../images/nasa.png";
import peanut from "../images/peanut.png";
import pepsi from "../images/pepsi.png";
import target from "../images/target.png";
import twitter from "../images/twitter.png";
import visa from "../images/visa.png";
export default class Information extends Component {
  constructor(props) {
    super(props);
    this.state = { title: null, para: null, logos: [] };
  }

  getInfo() {
    const { active } = this.props;
    let title;
    let para;
    let logos;
    switch (true) {
      case active === "letter": {
        title = "Lettermark Logos";
        para = (
          <>
            <p>
              A Monogram or lettermark is a typography-based logo that's comprised of
              a few letters, usually a company's initials. The lettermark is all
              about simplicity
            </p>
            <p>
              By utilizing just a few letters, lettermark logos are effective at
              streamlining any company brand if they have a long name.
            </p>
          </>
        );
        logos = [hbo, ibm, nasa];
        break;
      }
      case active === "word": {
        title = "Wordmark Logos";
        para = (
          <p>
            Similar to a lettermark, a wordmark or logotype is a font-based logo that
            focuses on a business' name alone. Think Visa and Coca-Cola. Wordmark
            logos work really well when a company has a succinct and distinct name.
            Google's logo is a great example of this. The name itself is catchy and
            memorable, so when combined with strong typography, the logo helps create
            strong brand recognition.
          </p>
        );
        logos = [visa, coke, google];
        break;
      }
      case active === "picture": {
        title = "Pictorial Mark Logos";
        para = (
          <>
            <p>
              A pictorial mark (sometimes called brand mark or logo symbol) is an
              icon or graphic-based logo. It's probably the image that comes to mind
              when you think "logo" - the iconic Apple logo, the Twitter bird, the
              Target bullseye. Each of these companies' logos is so emblematic and
              each brand so established, that the mark alone is instantly
              recognizable.
            </p>
            <p>
              A true brand mark is only an image. Because of this, it can be a tricky
              logo type for new companies, or those without strong brand recognition,
              to use.
            </p>
          </>
        );
        logos = [apple, twitter, target];
        break;
      }
      case active === "abstract": {
        title = "Abstract Mark Logos";
        para = (
          <>
            <p>
              An abstract mark is a specific type of pictorial logo. Instead of being
              as recognizable image - like an apple or a bird - it's an abstract
              geometric form that represents your business. A few famous examples
              include the BP starburst-y logo, the Pepsi divided circle, and the
              strip-y Adidas flower.
            </p>
            <p>
              Like all logo symbols, abstract marks work really well becayse they
              condense your brand into a single image. However, instead of being
              restricted to a picture of something recognizable, abstract logos allow
              you to create something truly unique to represent your brand.
            </p>
          </>
        );
        logos = [bp, pepsi, adidas];
        break;
      }
      case active === "mascot": {
        title = "Mascot Logos";
        para = (
          <>
            <p>
              Mascot logos are logos that involve an illustrated character. Often
              colorful, sometimes cartoonish, and always fun, the mascot logo is a
              great way to create your very own brand spokesperson.
            </p>
            <p>
              A mascot is simply an illustrated character that represents your
              comnpany. Think of them as the ambassador for your business. Famous
              mascots include the Kool-Aid Man, KFC's Colonel, and PUB's cute Water
              Wally.
            </p>
          </>
        );
        logos = [koolaid, kfc, peanut];
        break;
      }
      case active === "combo": {
        title = "Combination Logos";
        para = (
          <>
            <p>
              A combination mark is a logo comprised of a combined wordmark or
              lettermark with a pictorial mark, abstract mark, or mascot. The picture
              and text can be laid out side-by-side, stacked on top of each other, or
              integrated together to create an image.
            </p>
            <p>
              Because a name is associated with the image, a combination mark is a
              versatile choice, with both the text and icon or mascot working
              together to reinforce your brand.
            </p>
          </>
        );
        logos = [doritos, bk, lacoste];
      }
    }
    return {
      title,
      para,
      logos,
    };
  }

  render() {
    const { title, para, logos } = this.getInfo();
    return (
      <div id="info" className="row">
        <div className="col-6">
          <h2>{title}</h2>
          <div id="info-para">{para}</div>
        </div>
        <div className="col-6 d-flex" id="info-logos">
          {logos.map((logo) => (
            <img src={logo} alt="logo" className="logo-img" />
          ))}
        </div>
      </div>
    );
  }
}
