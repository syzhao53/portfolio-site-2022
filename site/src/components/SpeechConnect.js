/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../assets/index.css';
import speechconnect from '../assets/speechconnect-mockup.png';
import speechicons from '../assets/speech-icons.png';
import speechgridwire from '../assets/speech-grid-wire.png';
import speechgridui from '../assets/speech-grid-ui.png';
import speechcustomizewire from '../assets/speech-customize-wire.png';
import speechcustomizeui from '../assets/speech-customize-ui.png';
import speechwordwire from '../assets/speech-word-wire.png';
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
        <div id="how-might-card-double" className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            How might we create an organized & customizable AAC application so
            that users can tailor the functionality to their own needs?
            <br />
            <br />
            How might we create an accessible system of illustrations/icons so
            that users do not need to depend only on text for navigation?
          </div>
        </div>
        {/* <div id="how-might-card" className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            How might we create an accessible system of illustrations/icons so
            that users do not need to depend only on text for navigation?
          </div>
        </div> */}
        {/* <div className="section-header" id="market-research">Market Research</div> */}
        {/* WHERE DOES THE HOW MIGHT WE GO?? */}
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header" id="solution">Solution</div>
            <div className="project-ltext">
              My solution focused on the user flows of speaking a sentence with the app (Home),
              allowing for customization (Customize),
              adding a custom word to the app (Add Word), and adding a custom set of vocabulary for
              the main grid view (Add Vocab Set).
              <br />
              <br />
              This was executed with a tablet size in mind
              for similarity to actual AAC devices, and feedback from SLPs was provided between
              first and second iterations for wireframes.
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
                  <span style={{ 'font-weight': '600' }}>Customize: </span>
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
        <div className="subsection-header">HOME (GRID VIEW)</div>
        <div className="project-text">
          My solution started with the main grid view that acts as the homepage of the app.
          In this part of the app, I focused on the user flow of how someone would speak a
          sentence, paying attention to how words and categories are organized in the grid.
          Across 3 iterations, the homepage ultimately featured:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Word & category buttons </span>
                in the grid, organized based on how sentences would be commonly structured
                (pronouns and nouns on far left of grid).
                Category buttons were ultimately moved to the bottom right since SLPs noted that
                users would benefit from commonly used words being in the first row instead,
                especially if interacting through scanning or eye gazing.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Keyboard & Search buttons </span>
                included in the grid as additional buttons. SLPs recommend a keyboard feature to
                allow flexibility in communication style if a user would prefer to type. The search
                function would help users locate a word in the grid. Keyboard and Search were
                moved from the navigation bar to the grid since they would be features contained in
                the grid view, not separate pages in the app.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Navigation to customization page </span>
                included in bottom navigation bar to emphasize the app&apos;s ability to create a
                custom experience.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Top bar to display words </span>
                that a user spoke, meant to promote literacy and to help user track what
                they are communicating. This includes the option to clear a word from the bar.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={speechgridwire} alt="speech-grid-wire" />
        <div className="iteration-caption">
          Wireframe iterations 1, 2, & 3
        </div>
      </div>
      <div className="project-wrap">
        <div className="project-text">
          The final design demonstrates an example of how a user&apos;s grid could
          be set up with the general button layout outlined in the wireframes. Features
          use the main orange color while word buttons are assigned a color based on the
          part of speech. In the example of a category page, the Keyboard and Search
          buttons remain in their original
          position to enforce the idea from user research that buttons should generally
          have one consistent motor pattern for interaction.
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={speechgridui} alt="speech-grid-ui" />
        <div className="iteration-caption">
          Main grid view & &ldquo;Activities&rdquo; category page example
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">CUSTOMIZE</div>
        <div className="project-text">
          In the Customize page, the user sees options for customizing their experience with
          the home grid view. Originally named the Edit page, I chose to rename the page for clarity
          and to emphasize the idea of a custom experience. Additionally, icons were added
          to the cards in the second iteration to account for users who can&apos;t rely on
          text for navigation. Features include:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Adding a word to the database </span>
                from the &ldquo;Add Word&rdquo; button
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Adding a custom vocab set </span>
                for the grid from the &ldquo;Add Vocab Set&rdquo; button
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Changing the vocab set for the grid </span>
                in order to allow for users to control how they progress from basic to more advanced
                set-ups. This also includes custom sets and sets that text-only (for users who
                don&apos;t want or need visual aids).
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Changing the theme for icons </span>
                to accomodate for different visual needs or preferences
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Other quick actions </span>
                for editing an existing word in the database (Edit Word) and changing the
                voice that speaks the words a user selects (Change Voice)
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={speechcustomizewire} alt="speech-customize-wire" />
        <div className="iteration-caption">
          Wireframe iterations 1 & 2
        </div>
      </div>
      <div className="project-wrap">
        <div className="project-text">
          For the UI design, changes between iterations mainly involved filling cards and icons to
          better indicate interactive components.
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={speechcustomizeui} alt="speech-customize-ui" />
        <div className="iteration-caption">
          UI design iterations 1 & 2 (final)
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">ADD WORD</div>
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
        <img className="mockup-img" src={speechwordwire} alt="speech-word-wire" />
        <div className="iteration-caption">
          Wireframe iterations 1 & 2
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">ADD VOCAB SET</div>
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
        <div className="subsection-header-sec">UI DESIGN</div>
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
      <div id="last-mockup">
        <img className="mockup-img" src={speechicons} alt="speech-icons" />
      </div>
      <div className="project-wrap">
        <div className="section-header" id="prototype">Final Protoype</div>
        <div className="project-text">
          Figma links
          <br />
          Sound prototype
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
