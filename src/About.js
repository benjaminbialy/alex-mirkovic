import React, { useEffect } from "react";
import InfoCard from "../src/InfoCard.js";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const subjectVariants = {
  visible: {
    width: "100%",
    transition: { type: "Inertia", delay: 0.05, duration: 1.5 },
  },
  hidden: { width: 0 },
};

function About() {
  const controls = useAnimation();
  const controlsTwo = useAnimation();

  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [refTwo, inViewTwo] = useInView();
  useEffect(() => {
    if (inViewTwo) {
      controlsTwo.start("visible");
    }
  }, [controlsTwo, inViewTwo]);
  return (
    <div className="about">
      <div className="about--me">
        <div className="about--me--content">
          <h2 className="full">Me, Myself and I</h2>
          <p className="full">
            Hi I’m Alex, a current year 12 student as St. Paul’s Anglican
            Grammar School. I have recently finished VCE Biology in 2021 and
            achieved a raw 42 study score. I will be offering tutoring for VCE
            Biology Units 1 &#38; 2 or 3 &#38; 4 in 2022. I have a highly
            sophisticated knowledge of the 2022 study design and great approach
            to teaching you guys how to visualise and understand the content on
            a deeper level. I also will tutor VCE Units 1 &#38; 2 Specialist
            Math, Math Methods, Chemistry, Physics and English Language.
          </p>
          <p className="full">I am open to new opportunities.</p>
        </div>
      </div>
      <div className="tutoring full">
        <div className="tutoring--content">
          <h2>Tutoring Skills &#38; Experience</h2>
          <p className="full">
            I offer a wide array of tutoring in the following subjects: VCE
            Units 1 &#38; 2 Specialist Math, Math Methods, Physics, Chemistry,
            English Language and Biology. To book a session in any of the
            following subjects please contact me from down below through my
            email or number. I would also like to point out that I charge $40
            dollars an hour and our first session is free so you can decide if
            you would like to continue with me.
          </p>
          <p className="full">
            For more detail or to book a tutoring lesson in any of the following
            subjects please contact me from down below and call my number or
            feel free to send me a text and we can take it from there.
          </p>
        </div>
        <div className="tutoring--stats">
          <div className="confidence--bars">
            <h4>Biology</h4>
            <footer>
              <motion.div
                id="biology"
                ref={ref}
                variants={subjectVariants}
                initial="hidden"
                animate={controls}
              ></motion.div>
            </footer>
            <h4>Chemistry</h4>
            <footer>
              <motion.div
                id="chemistry"
                ref={ref}
                variants={subjectVariants}
                initial="hidden"
                animate={controls}
              ></motion.div>
            </footer>
            <h4>English Language</h4>
            <footer>
              <motion.div
                id="english"
                ref={ref}
                variants={subjectVariants}
                initial="hidden"
                animate={controls}
              ></motion.div>
            </footer>
            <h4>Physics</h4>
            <footer>
              <motion.div
                id="physics"
                ref={ref}
                variants={subjectVariants}
                initial="hidden"
                animate={controls}
              ></motion.div>
            </footer>
            <h4>Math Methods + Specialist</h4>
            <footer>
              <motion.div
                id="maths"
                ref={ref}
                variants={subjectVariants}
                initial="hidden"
                animate={controls}
              ></motion.div>
            </footer>
          </div>
          <div className="info--card--container">
            <InfoCard
              heading="Year 11 Dux"
              first__line="St. Paul’s Anglican Grammar School"
              date="2021"
              second__line="Top scoring student at St. Pauls Anglican Grammar School in year 11 achieved the annual dux award"
            />
            <InfoCard
              heading="Year 11 Subject Awards"
              first__line="St. Paul’s Anglican Grammar School"
              date="2020-2021"
              second__line="Raw 42 in VCE Biology, and top scoring student in VCE Units 1 &#38; 2 Physics, Chemistry and English Language"
            />
          </div>
        </div>
      </div>
      <div className="photography full">
        <div className="photography--content">
          <h2>Photography Skills &#38; Experience</h2>
          <p className="full">
            The beginning of my journey as a photographer was sparked when my
            mum purchases a camera and it wasn’t until one year after she
            purchased it that I began to tinker and use it, playing around with
            the art of taking photos. After this I just fell in love with taking
            photos and capturing unforgettable moments and memories that can be
            looked back upon many years by my future self.
          </p>
          <p className="full">
            I am now a very experienced photographer with 5 year of experience
            and can successfully dabble into the realms of both Adobe Lightroom
            and Photoshop to edit and further enhance photographs to truly make
            them pop and come to life. If you require any such editing please
            feel free to contact me. I charge $50 to edit 20 photos with a basic
            touch up in Photoshop and Lightroom and $5 per photo custom touch up
            in Photoshop and Lightroom.
          </p>
          <p className="full">
            Also, if you are looking for in person photography such as personal
            events, parties and model shots of some sort and have checked the
            map down below to see if you are around my local area feel free to
            contact me so we can organise a shoot!
          </p>
          <p className="full">
            Feeling a bit curious? If still unsure of my capabilities feel free
            to contact me and I can send you a larger sample of my portfolio for
            you to decide.
          </p>
        </div>
        <div className="photography--stats">
          <div className="confidence--bars">
            <h4>Adobe Lightroom</h4>
            <footer>
              <motion.div
                id="lightroom"
                ref={refTwo}
                variants={subjectVariants}
                initial="hidden"
                animate={controlsTwo}
              ></motion.div>
            </footer>
            <h4>Nature Setting</h4>
            <footer>
              <motion.div
                id="nature"
                ref={refTwo}
                variants={subjectVariants}
                initial="hidden"
                animate={controlsTwo}
              ></motion.div>
            </footer>
            <h4>Urban Setting</h4>
            <footer>
              <motion.div
                id="urban"
                ref={refTwo}
                variants={subjectVariants}
                initial="hidden"
                animate={controlsTwo}
              ></motion.div>
            </footer>
            <h4>Adobe Photoshop</h4>
            <footer>
              <motion.div
                id="photoshop"
                ref={refTwo}
                variants={subjectVariants}
                initial="hidden"
                animate={controlsTwo}
              ></motion.div>
            </footer>
          </div>
          <div className="info--card--container">
            <InfoCard
              heading="Photography Awards"
              first__line="Tanjil Artshow"
              date="2018-2019"
              second__line="In 2018 my photo won third place and in 2019 my photo won second place at the Tanjil junior photography division"
            />
            <div className="photography--img info--card">
              <h3>Winning Photos</h3>
              <div className="winning--photo">
                <Image
                  src={"/AwardPhotoSteelWool.jpeg"}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="winning--photo">
                <Image
                  src={"/AwardPhotoMountainWithStars.jpeg"}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
