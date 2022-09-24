import React, { Component } from "react";

import Vedika from "../assets/profiles/Vedika.png";
import Arinji from "../assets/profiles/Arinji.png";
import Nilay from "../assets/profiles/Nilay.png";
import Saesha from "../assets/profiles/Saesha.png";
import Dhanvin from "../assets/profiles/Dhanvin.png";
import Kunsh from "../assets/profiles/Kunsh.png";
import Neel from "../assets/profiles/Neel.png";
import Shreeniket from "../assets/profiles/Shreeniket.png";
import Shreshth from "../assets/profiles/Shreshth.png";
import Anwesha from "../assets/profiles/Anwesha.png";
import Yuvraj from "../assets/profiles/Yuvraj.png";
import unknown from "../assets/profiles/unknown.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
class Team extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p className="p-10"></p>
        <h1 className="text-3xl pb-5 text-center">
          Meet the <span className="text-yellow-500">Executives</span>
        </h1>
        <div className="flex items-center md:justify-around pt-5 pb-5 flex-col md:flex-row space-y-8 md:space-y-0">
          <div className="p-3 pb-5 transition ease-in-out rounded-lg hover:shadow-md hover:shadow-yellow-500 hover:cursor-pointer bg-black-950 text-center">
            <div className="relative text-transparent transition ease-in-out duration-500 hover:text-black-950 ">
              <img
                src={Vedika}
                alt={Vedika}
                className="rounded-lg pb-3 h-56 w-56"
              ></img>
              <div className="absolute bottom-0 ml-3 mb-5 text-xl ">
                <a href="mailto:vedikapanjwani115@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 mr-3 mb-5 text-xl">
                <a
                  href="https://www.instagram.com/vedika_panjwani/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FontAwesomeIcon icon={faInstagram} className="" />
                </a>
              </div>
            </div>
            <p className="p-3 border-t-2 border-white text-2xl">
              Vedika Panjwani
            </p>
            <p className="pb-3 text-yellow-500 text-xl">
              Chief Operating Officer
            </p>
            <p className="w-56 break-words text-md">
              An ambivert, someone with whom you become friends very easily.
              Hardcore bollywood fan and hence adapts to the situation easily.
              Loves computer applications, yellow lays and the sky.
            </p>
          </div>
          <div className="p-3 pb-5 transition ease-in-out rounded-lg hover:shadow-md hover:shadow-yellow-500 hover:cursor-pointer bg-black-950 text-center">
            <div className="relative text-transparent transition ease-in-out duration-500 hover:text-black-950 ">
              <img
                src={Arinji}
                alt={Arinji}
                className="rounded-lg pb-3 h-56 w-56"
              ></img>
              <div className="absolute bottom-0 ml-3 mb-5 text-xl ">
                <a href="mailto:arinjaydhar205@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 mr-3 mb-5 text-xl">
                <a
                  href="https://www.instagram.com/34arinji/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FontAwesomeIcon icon={faInstagram} className="" />
                </a>
              </div>
            </div>
            <p className="p-3 border-t-2 border-white text-2xl">Arinjay Dhar</p>
            <p className="pb-3 text-yellow-500 text-xl">
              Chief Executive Officer
            </p>
            <p className="w-56 break-words">
              Creator of the Site, Extroverted and Excited. Loves coding in
              React Js and aspires to work for Google. Exceptionally bad at
              Hindi and has a weird American Accent. Caffeinated 24/7.
            </p>
          </div>
          <div className="p-3 pb-5 transition ease-in-out rounded-lg hover:shadow-md hover:shadow-yellow-500 hover:cursor-pointer bg-black-950 text-center">
            <div className="relative text-transparent transition ease-in-out duration-500 hover:text-black-950 ">
              <img
                src={Nilay}
                alt={Nilay}
                className="rounded-lg pb-3 h-56 w-56"
              ></img>
              <div className="absolute bottom-0 ml-3 mb-5 text-xl ">
                <a href="mailto:nilay.bagchia7@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 mr-3 mb-5 text-xl">
                <a
                  href="https://www.instagram.com/117nilay/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FontAwesomeIcon icon={faInstagram} className="" />
                </a>
              </div>
            </div>
            <p className="p-3 border-t-2 border-white text-2xl">Nilay Bagchi</p>
            <p className="pb-3 text-yellow-500 text-xl">
              Chief Financial Officer
            </p>
            <p className="w-56 break-words">
              Calm, Cool and Collected. The chill guy you would go to when you
              feel low. Hopes for depression to be eradicated from the world,
              and does his best to help others against it.
            </p>
          </div>
          <div className="p-3 pb-5 transition ease-in-out rounded-lg hover:shadow-md hover:shadow-yellow-500 hover:cursor-pointer bg-black-950 text-center">
            <div className="relative text-transparent transition ease-in-out duration-500 hover:text-black-950 ">
              <img
                src={Saesha}
                alt={Saesha}
                className="rounded-lg pb-3 h-60 w-60"
              ></img>
              <div className="absolute bottom-0 ml-3 mb-5 text-xl ">
                <a href="mailto:saeshachaturvedi14@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 mr-3 mb-5 text-xl">
                <a
                  href="https://www.instagram.com/sash._14._/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FontAwesomeIcon icon={faInstagram} className="" />
                </a>
              </div>
            </div>
            <p className="p-3 border-t-2 border-white text-2xl">
              Saesha Chaturvedi
            </p>
            <p className="pb-3 text-yellow-500 text-xl">Manager</p>
            <p className="w-56 break-words">
              Simple yet Marvelous. Always there to support all her peers, and
              never lets anyone feel left out. A follower of the saying "Work
              hard and party harder". Hates holding grudges and is loved by
              everyone.
            </p>
          </div>
        </div>
        <div className="flex items-center md:justify-around pt-5 pb-5 flex-col md:flex-row space-y-8 md:space-y-0">
          <div className="p-3 pb-5 transition ease-in-out rounded-lg hover:shadow-md hover:shadow-yellow-500 hover:cursor-pointer bg-black-950 text-center">
            <div className="relative text-transparent transition ease-in-out duration-500 hover:text-black-950 ">
              <img
                src={unknown}
                alt={unknown}
                className="rounded-lg pb-3 h-56 w-56"
              ></img>
              <div className="absolute bottom-0 ml-3 mb-5 text-xl ">
                <a href="mailto:vedant.iyengar0307@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
            </div>
            <p className="p-3 border-t-2 border-white text-2xl">Vedant</p>
            <p className="pb-3 text-yellow-500 text-xl">Developer</p>
            <p className="w-56 break-words">
              Live example of "I will be there for you". A person guided by
              discipline and master skills. Understanding, supportive and a true
              friend with an amazing sense of humor. Never fears to face what's
              coming.
            </p>
          </div>
          <div className="p-3 pb-5 transition ease-in-out rounded-lg hover:shadow-md hover:shadow-yellow-500 hover:cursor-pointer bg-black-950 text-center">
            <div className="relative text-transparent transition ease-in-out duration-500 hover:text-black-950 ">
              <img
                src={Dhanvin}
                alt={Dhanvin}
                className="rounded-lg pb-3 h-56 w-56"
              ></img>
              <div className="absolute bottom-0 ml-3 mb-5 text-xl ">
                <a href="mailto:dhanvinnair11@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
            </div>
            <p className="p-3 border-t-2 border-white text-2xl">Dhanvin</p>
            <p className="pb-3 text-yellow-500 text-xl">Developer</p>
            <p className="w-56 break-words">
              Extroverted and always cheerful. Loves spreading Positive Vibes.
              Enjoys coding and developing new things. New to the field of
              React. Experienced in Java.
            </p>
          </div>
          <div className="p-3 pb-5 transition ease-in-out rounded-lg hover:shadow-md hover:shadow-yellow-500 hover:cursor-pointer bg-black-950 text-center">
            <div className="relative text-transparent transition ease-in-out duration-500 hover:text-white ">
              <img
                src={Kunsh}
                alt={Kunsh}
                className="rounded-lg pb-3 h-56 w-56"
              ></img>
              <div className="absolute bottom-0 ml-3 mb-5 text-xl ">
                <a href="mailto:kunsh.mehrotra@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 mr-3 mb-5 text-xl">
                <a
                  href="https://www.instagram.com/kunsh_mehrotra16/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FontAwesomeIcon icon={faInstagram} className="" />
                </a>
              </div>
            </div>
            <p className="p-3 border-t-2 border-white text-2xl">Kunsh</p>
            <p className="pb-3 text-yellow-500 text-xl">Verifier</p>
            <p className="w-56 break-words">
              An introvert and hilarious dude who can sometimes be creative.
              Co-operative to work with others and born ready to learn and try
              new things. Loves to play games and work out.
            </p>
          </div>
          <div className="p-3 pb-5 transition ease-in-out rounded-lg hover:shadow-md hover:shadow-yellow-500 hover:cursor-pointer bg-black-950 text-center">
            <div className="relative text-transparent transition ease-in-out duration-500 hover:text-black-950 ">
              <img
                src={Neel}
                alt={Neel}
                className="rounded-lg pb-3 h-56 w-56"
              ></img>
              <div className="absolute bottom-0 ml-3 mb-5 text-xl ">
                <a href="mailto:neelabhyankar357@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 mr-3 mb-5 text-xl">
                <a
                  href="https://www.instagram.com/neel_abhyankar/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FontAwesomeIcon icon={faInstagram} className="" />
                </a>
              </div>
            </div>
            <p className="p-3 border-t-2 border-white text-2xl">Neel</p>
            <p className="pb-3 text-yellow-500 text-xl">Verifier</p>
            <p className="w-56 break-words">
              "A regular teen with a laptop can do anything!" thats the motto I
              live by. Be working on my socializing skills on the daily and
              helping out my friends when they need it.
            </p>
          </div>
        </div>
        <div className="flex items-center md:justify-around pt-5 pb-5 flex-col md:flex-row space-y-8 md:space-y-0">
          <div className="p-3 pb-5 transition ease-in-out rounded-lg hover:shadow-md hover:shadow-yellow-500 hover:cursor-pointer bg-black-950 text-center">
            <div className="relative text-transparent transition ease-in-out duration-500 hover:text-black-950 ">
              <img
                src={Shreshth}
                alt={Shreshth}
                className="rounded-lg pb-3 h-56 w-56"
              ></img>
              <div className="absolute bottom-0 ml-3 mb-5 text-xl ">
                <a href="mailto:shreshth.shetty007@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
            </div>
            <p className="p-3 border-t-2 border-white text-2xl">Shreshth</p>
            <p className="pb-3 text-yellow-500 text-xl">Verifier</p>
            <p className="w-56 break-words text-md">
              A proud foody with semi uncle jokes clogged up in the head. Quite
              miser but also helpful at the same time. A perfectionist who would
              rather spend an hour writing a title than write the project.
            </p>
          </div>
          <div className="p-3 pb-5 transition ease-in-out rounded-lg hover:shadow-md hover:shadow-yellow-500 hover:cursor-pointer bg-black-950 text-center">
            <div className="relative text-transparent transition ease-in-out duration-500 hover:text-black-950 ">
              <img
                src={Anwesha}
                alt={Anwesha}
                className="rounded-lg pb-3 h-56 w-56"
              ></img>
              <div className="absolute bottom-0 ml-3 mb-5 text-xl ">
                <a href="mailto:kunsh.mehrotra@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 mr-3 mb-5 text-xl">
                <a
                  href="https://www.instagram.com/anweshaa_99/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FontAwesomeIcon icon={faInstagram} className="" />
                </a>
              </div>
            </div>
            <p className="p-3 border-t-2 border-white text-2xl">Anwesha</p>
            <p className="pb-3 text-yellow-500 text-xl">Writer</p>
            <p className="w-56 break-words">
              Lazy but also Energetic when the time presents itself. Loves
              Coffee and could not survive without it. Loves to Gossip and is
              exceptionally bad at keeping secrets. But Awesome and Lovely in
              the end.
            </p>
          </div>
          <div className="p-3 pb-5 transition ease-in-out rounded-lg hover:shadow-md hover:shadow-yellow-500 hover:cursor-pointer bg-black-950 text-center">
            <div className="relative text-transparent transition ease-in-out duration-500 hover:text-white ">
              <img
                src={Yuvraj}
                alt={Yuvraj}
                className="rounded-lg pb-3 h-56 w-56"
              ></img>
              <div className="absolute bottom-0 ml-3 mb-5 text-xl ">
                <a
                  href="mailto:yuvrajkedia07@gmail.com
"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 mr-3 mb-5 text-xl">
                <a
                  href="https://www.instagram.com/yuvikedia_19/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FontAwesomeIcon icon={faInstagram} className="" />
                </a>
              </div>
            </div>
            <p className="p-3 border-t-2 border-white text-2xl">Yuvraj</p>
            <p className="pb-3 text-yellow-500 text-xl">Writer</p>
            <p className="w-56 break-words">
              Man with a vision, wishes to become an entrepreneur.Got simple
              hobbies of a twenty year old like jogging and watching anime.
              Always interested in big projects. Friendly, humble and sweet.
            </p>
          </div>
          <div className="p-3 pb-5 transition ease-in-out rounded-lg hover:shadow-md hover:shadow-yellow-500 hover:cursor-pointer bg-black-950 text-center">
            <div className="relative text-transparent transition ease-in-out duration-500 hover:text-white ">
              <img
                src={Shreeniket}
                alt={Shreeniket}
                className="rounded-lg pb-3 h-56 w-56"
              ></img>
              <div className="absolute bottom-0 ml-3 mb-5 text-xl ">
                <a href="mailto:niketr1301@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
            </div>
            <p className="p-3 border-t-2 border-white text-2xl">Shreeniket</p>
            <p className="pb-3 text-yellow-500 text-xl">Verifier</p>
            <p className="w-56 break-words text-md">
              He is arguably one of the most multi-faceted people to hang out
              with. His passions range from formula one to playing the guitar.
              He is driven, adaptive and mostly optimistic.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Team;