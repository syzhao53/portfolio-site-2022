/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../assets/index.css';
import speechconnect from '../assets/speechconnect-mockup.png';
import NavBar from './NavBar';
import Footer from './Footer';

function SpeechConnect({ currPage, setCurrPage }) {
  useEffect(() => {
    setCurrPage('');
    document.title = 'SpeechConnect | Sylvia Zhao';
    // window.scrollTo(0, 0);
  }, []);

  return (
    <div className="SpeechConnect">
      <NavBar currPage={currPage} />
      <div id="container-floating">
        <div className="table-text1 nds">
          <Link to="/speechconnect#overview">
            <p className="letter">OVERVIEW</p>
          </Link>
        </div>
        <div className="table-text2 nds">
          <Link to="/speechconnect#aac-devices">
            <p className="letter">AAC DEVICES</p>
          </Link>
        </div>
        <div className="table-text3 nds">
          <Link to="/speechconnect#research">
            <p className="letter">RESEARCH</p>
          </Link>
        </div>
        {/* <div className="table-text3 nds">
          <Link to="/speechconnect#market-research">
            <p className="letter">MARKET RESEARCH</p>
          </Link>
        </div> */}
        <div className="table-text4 nds">
          <Link to="/speechconnect#solution">
            <p className="letter">SOLUTION</p>
          </Link>
        </div>
        <div className="table-text5 nds">
          <Link to="/speechconnect#prototype">
            <p className="letter">PROTOTYPE</p>
          </Link>
        </div>
        <div className="table-text6 nds">
          <Link to="/speechconnect#reflections">
            <p className="letter">REFLECTIONS</p>
          </Link>
        </div>
        <div id="floating-button">
          <svg className="table-icon" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id="icon-border" cx="28" cy="28" r="27" stroke="#bdbdbd" strokeWidth="2" />
            <rect x="19" y="18.5" width="23" height="2" rx="1" fill="#bdbdbd" />
            <rect x="19" y="27.5" width="23" height="2" rx="1" fill="#bdbdbd" />
            <rect x="19" y="36.5" width="23" height="2" rx="1" fill="#bdbdbd" />
            <circle className="dot" cx="14.5" cy="19.5" r="1.5" fill="#bdbdbd" />
            <circle className="dot" cx="14.5" cy="28.5" r="1.5" fill="#bdbdbd" />
            <circle className="dot" cx="14.5" cy="37.5" r="1.5" fill="#bdbdbd" />
          </svg>
          <svg className="table-icon-dark" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id="icon-border" cx="28" cy="28" r="27" stroke="#033E57" strokeWidth="2" />
            <rect x="19" y="18.5" width="23" height="2" rx="1" fill="#033E57" />
            <rect x="19" y="27.5" width="23" height="2" rx="1" fill="#033E57" />
            <rect x="19" y="36.5" width="23" height="2" rx="1" fill="#033E57" />
            <circle className="dot" cx="14.5" cy="19.5" r="1.5" fill="#033E57" />
            <circle className="dot" cx="14.5" cy="28.5" r="1.5" fill="#033E57" />
            <circle className="dot" cx="14.5" cy="37.5" r="1.5" fill="#033E57" />
          </svg>
        </div>
      </div>
      <div className="project-wrap">
        <div className="project-header">SpeechConnect</div>
        <div className="project-info">Creating a tablet experience for alternative communication tech</div>
        <img className="project-img" src={speechconnect} alt="speechconnect mockup" />
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header" id="overview">Overview</div>
            <div className="project-ltext">
              Language drives everyday interactions and is a tool that shapes
              how people form connections with each other. Stemming from my interests
              in psychology and linguistics, I wanted to explore how design and technology can
              support different communication methods with accessibility in mind.
              <br />
              <br />
              This project focused on creating a customizable experience in augmentative and
              alternative communication to serve users who need technology to assist their
              daily interactions with others due to speech difficulties. While specialized
              hardware does exist, I framed this project as a software solution
              for standard tablets.
            </div>
          </div>
          <div className="section-rflex">
            <div className="descrip-lflex">
              <div className="stage-wrap">
                <div className="subsection-rheader-top">
                  ROLE
                </div>
                <div className="project-rtext">
                  UX research & design
                  <br />
                  Visual design
                </div>
              </div>
            </div>
            <div className="descrip-rflex">
              <div className="subsection-rheader">
                TIMELINE
              </div>
              <div className="project-rtext">
                1 month
              </div>
            </div>
          </div>
        </div>
        <div className="section-header" id="aac-devices">AAC Devices</div>
        <div className="project-text">
          Digital augmentative and alternative communication (AAC) devices are speech generating
          devices that allow a user to communicate through a combination of words, images, and
          phrases that the device &ldquo;says&rdquo; out loud. Words are generally presented in a
          grid layout that users interact with either through touch, scanning, or eye gazing.
          While many groups benefit from AAC devices, core users include any individuals
          who have difficulty producing speech due to neurological or physical conditions.
          This includes individuals with aphasia, autism, apraxia, and traumatic brain injury.
          <br />
          <br />
          Made to help users increase their everyday independence and connections with others, AAC
          devices serve a crucial need but can cost thousands of dollars for high-tech models.
          This barrier to access led me to consider how digital applications
          can attempt to fill the same role; for example, in the case where a
          user already possesses a standard tablet, they could rely on an app instead of
          purchasing a new device.
        </div>
        {/* <img className="project-img" src={pithome} alt="pit-home" /> */}
        <div className="section-header" id="research"> Research</div>
        <div className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            &ldquo;This is an area in the field that is so critical and underserved&rdquo;
            {/* <br /> */}
            <span style={{ 'font-style': 'italic' }}> &mdash; Speech-Language Pathologist</span>
          </div>
        </div>
        <div className="subsection-header">EXPERT KNOWLEDGE</div>
        <div className="project-text">
          To better understand the user groups and use cases for AAC devices, I surveyed 4
          professional speech-language pathologists (SLPs) who have experience working with AAC
          devices. Due to logistical constraints, information was collected via Google Forms
          in long-form answers.
          <br />
          <br />
          In addition to defining the user groups, I wanted to explore how traditional
          AAC devices differ from apps, compile a list of professionally recommended apps,
          and understand the challenges that people face with AAC devices.
        </div>
      </div>
      <div className="affinity-col">
        <div className="categories-wrap">
          <div className="categories-row">
            <div className="category-flex">
              <div className="category-name">USER GROUPS</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text-short">
                    People with neurological/physical/
                    <br />
                    mental
                    conditions
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Types of interactions with devices: touch, scanning, and/or eye gaze
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Therapists, family, friends of AAC users
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    People with limited or no speech capability
                  </div>
                </div>
              </div>
            </div>
            <div className="category-rflex">
              <div className="category-name">COMMON CHALLENGES</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Lack of flexibility in devices (eg. needing to show photos in another app)
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Issues with speed and precision (saying exactly what you want to say)
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Mobility impairments increase precision issues
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Very often geared towards children, lack of adult vocabulary
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="categories-row-last">
            <div className="category-flex">
              <div className="category-name">AAC DEVICES VS. APPS</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text-short">
                    Devices: more durable & customizable hardware
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Devices: requires recommendation & assessment by SLP to purchase
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Apps: good for people without mobility impairments
                    (no special durability needed)
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Apps: can be privately funded, widely available
                  </div>
                </div>
              </div>
            </div>
            <div className="category-rflex">
              <div className="category-name">DESIGN NEEDS</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Limited icon options for diverse representation
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Color scheme can be important with cerebral visual impairment
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Layout considerations for motor planning
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Ideally 60-70 words per page max. for non-writers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">MARKET RESEARCH</div>
        <div className="project-text">
          Based on the survey responses, I looked into 4 of the most popular AAC apps for tablets
          that currently exist: LAMP Words For Life, TouchChatHD with WordPower, TD Snap, and
          Proloquo2Go. For each app, I was mainly interested in the layout of the central grid view,
          customization capabilities, and UI design.
          <br />
          <br />
          Overall, AAC apps are structured through vocabulary sets for how the grid view
          is organized. Sets vary in sophistication depending on what a
          user would need to communicate and what they are capable of communicating with
          a device based on their level of experience. For example, apps will usually
          offer a basic/beginner set of vocabulary for users new to AAC, and then users
          can adjust their set as they learn.
        </div>
      </div>
      <div id="graphs-meetup" className="graphs">
        <div className="graphgrid-row">
          <div className="card-lgraph">
            <div className="graphcard-label">
              LAMP WORDS FOR LIFE
            </div>
            <div className="graphcard-ques">
              <ul>
                <li>
                  <div className="list-text">
                    3 vocab levels starting with basic set of 82 words
                    that each only need 1 touch to speak
                  </div>
                </li>
                <li>
                  <div className="list-text">
                    Customizable vocab sets that maintain target words in same positions in grid
                    to help users form motor patterns
                  </div>
                </li>
                <li>
                  <div className="list-text">Icon system paired with words in grid to promote literacy</div>
                </li>
              </ul>
            </div>
            {/* <img className="graph-img" src={generalexp} alt="general-exp graph" /> */}
          </div>
          <div className="card-rgraph">
            <div className="graphcard-label">
              TOUCHCHAT HD WITH WORDPOWER
            </div>
            <div className="graphcard-ques">
              <ul>
                <li>
                  <div className="list-text">
                    3 vocab levels starting with basic set of 82 words
                    that each only need 1 touch to speak
                  </div>
                </li>
                <li>
                  <div className="list-text">
                    Customizable vocab sets that maintain target words in same positions in grid
                    to help users form motor patterns
                  </div>
                </li>
                <li>
                  <div className="list-text">Icon system paired with words in grid to promote literacy</div>
                </li>
              </ul>
            </div>
            {/* <img className="graph-img" src={easeinfo} alt="ease-info graph" /> */}
          </div>
        </div>
        <div className="graphgrid-row">
          <div className="card-lgraph-low">
            <div className="graphcard-label">
              TD SNAP
            </div>
            <div className="graphcard-ques">
              How would you rate the experience of using the “Academic Planning Worksheet” feature?
            </div>
            {/* <img className="graph-img" src={academicplan} alt="academic-plan graph" /> */}
          </div>
          <div className="card-rgraph-low">
            <div className="graphcard-label">
              PROLOQUO2GO
            </div>
            <div className="graphcard-ques">
              How would you rate the experience of using the “Mock Schedules” feature?
            </div>
            {/* <img className="graph-img" src={mocksched} alt="mock-sched graph" /> */}
          </div>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">
          KEY RESEARCH INSIGHTS
        </div>
        <div className="project-text-single">
          I came away from my survey and interviews with these main insights:
        </div>
        <ul>
          <li>
            <div className="list-text">There is an extremely broad range of users with different needs who use AAC devices</div>
          </li>
          <li>
            <div className="list-text">The left sidebar navigation is too cramped and most sections go unused</div>
          </li>
          <li>
            <div className="list-text">The Academic Planning Worksheet feature is underused and is perceived the most negatively out of PennInTouch&apos;s main features</div>
          </li>
        </ul>
        <div className="project-text-low">
          After understanding the research results, I created two guiding questions for the design
          process, one for UX design and one for visual design.
        </div>
        <div id="how-might-card" className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            How might we create an organized & customizable AAC application so
            that users can tailor the functionality to their own needs?
          </div>
        </div>
        <div id="how-might-card" className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            How might we create an accessible system of illustrations/icons so
            that users do not need to depend only on text for navigation?
          </div>
        </div>
        {/* <div className="section-header" id="market-research">Market Research</div> */}
        {/* WHERE DOES THE HOW MIGHT WE GO?? */}
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header" id="solution">Solution</div>
            <div className="project-ltext">
              My solution focused on the user flows of speaking a sentence with the app (Home),
              allowing for customization (Customization),
              adding a custom word to the app (Add Word), and adding a custom set of vocabulary for
              the main grid view (Add Vocab Set). This was executed with a tablet size in mind
              for similarity to actual AAC devices.
            </div>
          </div>
          <div className="section-rflex">
            <div className="descrip-lflex">
              <div className="stage-wrap">
                <div className="subsection-rheader-top">
                  WIREFRAMES
                </div>
                <div className="project-rtext">
                  <span style={{ 'font-weight': '600' }}>Home: </span>
                  3 iterations
                  <br />
                  <span style={{ 'font-weight': '600' }}>Customization: </span>
                  2 iterations
                  <br />
                  <span style={{ 'font-weight': '600' }}>Add Word: </span>
                  2 iterations
                  <br />
                  <span style={{ 'font-weight': '600' }}>Add Vocab Set: </span>
                  2 iterations
                </div>
              </div>
            </div>
            <div className="descrip-rflex">
              <div className="subsection-rheader">
                UI DESIGN
              </div>
              <div className="project-rtext">
                2 iterations
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-wrap">
        {/* <img id="project-sketches" src={pitsketches} alt="pit-sketches" /> */}
        <div className="subsection-header">WIREFRAMES: ITERATION 1</div>
        <div className="project-text">
          Mention layout and motor planning considerations
          <br />
          My solution focused on creating more intuitive way to assign courses
          to requirements as well as a layout that would visually emphasize the different
          categories of requirements. The following features were incorporated into the redesign:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Collapsible right side panel </span>
                for assigning courses to requirements, indicated by
                prominently displayed tab on side; clearer than previous interaction at bottom of
                screen and collapsible for space-efficiency
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Cards for each requirement category </span>
                (Foundational Approaches, Sectors, Free Electives, etc.) to visually group
                information for users and improve on pain point concerning visual clutter
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Cards for the two certifications </span>
                (General Requirements and Major Requirements) to separate the checkpoints users
                use to measure progress; originally styled the same as a general requirement
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Filters </span>
                for customizing which requirement categories to view, gives user
                control over experience and allows for more compact view eliminating
                extra information (eg. completed categories)
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        {/* <img className="mockup-img" src={pitwire1} alt="pit-wire-1" /> */}
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">WIREFRAMES: ITERATION 2</div>
        <div className="project-text">
          After receiving feedback from users on the first set of wireframes, I made changes
          to the structure of the collapsible side panel and several minor features:
          <ul>
            <li>
              <div className="list-text">Made side panel dropdown menus searchable</div>
            </li>
            <li>
              <div className="list-text">
                Changed selection of Course Category (Completed Courses, Currently Enrolled,
                External Credit) from multiple dropdowns to single set of radio buttons in
                side panel
              </div>
            </li>
            <li>
              <div className="list-text">Second displayed dropdown in side panel now depends on the selected radio button</div>
            </li>
            <li>
              <div className="list-text">Removed certification cards (check mark icon added to cards in final UI to indicate certifications)</div>
            </li>
            <li>
              <div className="list-text">Made all cards for requirenent categories collapsible</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        {/* <img className="mockup-img" src={pitwire2} alt="pit-wire-2" /> */}
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">UI DESIGN: ITERATION 1</div>
        <div className="project-text">
          After finalizing wireframes, I styled the design with the goal of modernizing the
          interface while still keeping Penn&apos;s core branding in mind. The first iteration
          focused on the the following key style choices:
          <ul>
            <li>
              <div className="list-text">Lighter color palette overall for clean, modern feel</div>
            </li>
            <li>
              <div className="list-text">
                Fonts from Penn&apos;s core branding (EB Garamond and Roboto)
              </div>
            </li>
            <li>
              <div className="list-text">Selective use of main dark blue color from original interface to emphasize features</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        {/* <img className="mockup-img" src={pitui1} alt="pit-ui-1" /> */}
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">UI DESIGN: ITERATION 2</div>
        <div className="project-text">
          Based on further user feedback, the second iteration aimed to improve the cohesiveness
          of the design:
          <ul>
            <li>
              <div className="list-text">Changed all type to sans-serif font (Proxima Nova)</div>
            </li>
            <li>
              <div className="list-text">
                Subtle color added to left sidebar to match rest of design
              </div>
            </li>
            <li>
              <div className="list-text">Lightened and decreased size of bubbles next to course names</div>
            </li>
          </ul>
        </div>
      </div>
      <div id="last-mockup">
        {/* <img className="mockup-img" src={pitui2} alt="pit-ui-2" /> */}
      </div>
      <div className="project-wrap">
        <div className="section-header" id="prototype">Final Protoype</div>
        <div className="project-text">
          add link to figma or embed? or screen record, add actual device mockups?
        </div>
        <div className="section-header" id="reflections">Reflections</div>
        <div className="project-text">
          Hardware
          User testing
          Sound
          Application of academic knowledge
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SpeechConnect;
