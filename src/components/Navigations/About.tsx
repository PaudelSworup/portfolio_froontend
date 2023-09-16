import React, { useContext } from "react";
import Nav from "../Nav";
import ThemeContext from "../ApplicationWrapper/ThemeContext";
import { Link } from "react-router-dom";

const About = () => {
  const { darkmode } = useContext(ThemeContext);
  return (
    <>
      <Nav darkmode={darkmode} />
      <div className="p-3">
        <h3
          className={`text-4xl font-bold text-center ${
            darkmode && "text-white"
          }`}
        >
          ABOUT ME
        </h3>
        <div className="sm:grid xl:grid-cols-2 gap-3 p-4">
          <div>
            <img
              className="object-contain  flex grayscale-1"
              src="https://eyemartnepal.com/wp-content/uploads/2019/05/Screenshot_20200303-215853__01.jpg"
              alt=" "
            />
          </div>
          <div
            className={`tracking-widest  font-serif  sm:p-0 text-justify text-2xl ${
              darkmode && "text-gray-200"
            } `}
          >
            <p>
              Hey there! I'm Sworup KC, a passionate MERN stack developer
              hailing from the lively city of Kathmandu, Nepal. My journey into
              web development began about 3 years ago during my college years
              when I was introduced to the fascinating world of coding. Beyond
              my coding endeavors, I find immense joy in playing and watching
              football, as well as serenading the world with a song when the
              mood strikes. My journey in web development began with a
              fascination for crafting elegant and intuitive user interfaces,
              and I've finely tuned my skills in HTML, CSS, and JavaScript to
              create immersive web experiences. Recently, I've ventured into the
              exciting world of Android app development, constantly expanding my
              skill set to craft exceptional mobile experiences. Football isn't
              just a sport to me; it's a wellspring of inspiration and a shared
              passion, while music weaves its melodies into the fabric of my
              life.
            </p>
            <br />
            <p>
              I'm a firm believer that the best projects flourish through
              collaboration and shared enthusiasm. So, whether you're interested
              in discussing web development, the beautiful game of football, or
              the power of music, please feel free to reach out. For a more
              detailed look at my professional journey, you can explore my CV{" "}
              <Link to="#">
                <u>HERE</u>
              </Link>
              .
            </p>
            <br />
            <p>
              My overarching goals include becoming a proficient full-stack
              developer and making strides in the realm of Android app
              development. I aspire to bridge the gap between front-end and
              back-end development to create holistic and innovative digital
              solutions. Beyond the world of technology, I have a strong
              commitment to social service and a heartfelt desire to help those
              in need.{" "}
            </p>
            <br />
            <p>
              Thanks for visiting, and I'm looking forward to sharing more of my
              frontend adventures and Android app explorations with you. Let's
              connect and craft some remarkable digital experiences together!
              Together, we can transform ideas into captivating web solutions
              and mobile apps that make a positive impact on the world. Whether
              it's creating seamless user experiences, scoring goals on the
              pitch, or hitting the right note in a song, I'm all about the
              pursuit of excellence and the joy of creation. Join me on this
              exciting journey, and let's bring innovation to life!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
