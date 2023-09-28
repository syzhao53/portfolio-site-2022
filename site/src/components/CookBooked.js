/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../assets/index.css';
import cookbooked from '../assets/cookbooked-mockup.png';
import existingRecipes from '../assets/existing-recipes.png';
import notionRecipes from '../assets/notion-recipes.png';
// import meetupGif from '../assets/meetup-mobile.gif';
// import sketch from '../assets/cookbooked-sketch.png';
import paper1 from '../assets/cookbooked-paper-1.png';
import paper2 from '../assets/cookbooked-paper-2.png';
import moodboard from '../assets/cookbooked-moodboard.png';
import styleGuide from '../assets/cookbooked-style-guide.png';
import meetproto1 from '../assets/meet-proto-1.png';
import meetproto2 from '../assets/meet-proto-2.png';
import meetproto3 from '../assets/meet-proto-3.png';
import meettest1 from '../assets/meet-test-1.png';
import meetmobilecards from '../assets/meet-mobile-cards.png';
import meetdeskcards from '../assets/meet-desk-cards.png';
import meetdesk from '../assets/meet-desk.png';
// import meetdesk1 from '../assets/meet-desk-1.png';
// import meetdesk2 from '../assets/meet-desk-2.png';
// import meetdevicemobile from '../assets/meet-device-mobile.png';
// import meetdevicedesk from '../assets/meet-device-desk.png';
import meetdevicemock from '../assets/meet-device-mock.png';
import NavBar from './NavBar';
import Footer from './Footer';

function CookBooked({ currPage, setCurrPage }) {
  useEffect(() => {
    setCurrPage('');
    document.title = 'CookBooked | Sylvia Zhao';
    // window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Meetup">
      <NavBar currPage={currPage} />
      <div id="container-floating">
        <div className="table-text1 nds">
          <Link to="/cookbooked#overview">
            <p className="letter">OVERVIEW</p>
          </Link>
        </div>
        <div className="table-text2 nds">
          <Link to="/cookbooked#when2meet">
            <p className="letter">EXISTING SITES</p>
          </Link>
        </div>
        <div className="table-text3 nds">
          <Link to="/cookbooked#user-research">
            <p className="letter">USER RESEARCH</p>
          </Link>
        </div>
        <div className="table-text4 nds">
          <Link to="/cookbooked#solution">
            <p className="letter">SOLUTION</p>
          </Link>
        </div>
        <div className="table-text5 nds">
          <Link to="/cookbooked#prototype">
            <p className="letter">RESULTS</p>
          </Link>
        </div>
        <div className="table-text6 nds">
          <Link to="/cookbooked#reflections">
            <p className="letter">REFLECTIONS</p>
          </Link>
        </div>
        <div id="floating-button">
          <svg className="table-icon" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id="icon-border" cx="28" cy="28" r="27" stroke="#bbbbbb" strokeWidth="2" />
            <rect x="19" y="18.5" width="23" height="2" rx="1" fill="#bbbbbb" />
            <rect x="19" y="27.5" width="23" height="2" rx="1" fill="#bbbbbb" />
            <rect x="19" y="36.5" width="23" height="2" rx="1" fill="#bbbbbb" />
            <circle className="dot" cx="14.5" cy="19.5" r="1.5" fill="#bbbbbb" />
            <circle className="dot" cx="14.5" cy="28.5" r="1.5" fill="#bbbbbb" />
            <circle className="dot" cx="14.5" cy="37.5" r="1.5" fill="#bbbbbb" />
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
        <div className="project-header">CookBooked</div>
        <div className="project-info">Innovating on digital recipe interactions</div>
        <img className="project-img" src={cookbooked} alt="cookbooked mockup" />
        <div className="section-flex">
          <div className="section-lflex">
            {/* <img className="gif" src={meetupGif} alt="all recipes screenshot" /> */}
            <div className="section-header" id="overview">Overview</div>
            <div className="project-ltext-zero">
              CookBooked is an interactive web application designed to help cooks follow
              and organize recipes.
              <br />
              <br />
              This project was created for a human computer interaction
              course at the University of
              Pennsylvania. Each member of the team was involved in the
              research, design, and programming of the web app.
              The final app was implemented with React and Tailwind CSS.
              <br />
              <br />
              <ul>
                <li>
                  <div className="list-text">
                    <a className="proto-link" target="_blank" rel="noopener noreferrer" href="https://cookbooked-mocha.vercel.app/recipe/apple_pie">
                      Deployed web app
                    </a>
                  </div>
                </li>
                <li>
                  <div className="list-text">
                    <a className="proto-link" target="_blank" rel="noopener noreferrer" href="https://github.com/jasminecao/cookbooked">
                      GitHub repository
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="section-rflex">
            <div className="descrip-lflex">
              <div className="stage-wrap">
                <div className="subsection-rheader-top">
                  ROLE
                </div>
                <div className="project-rtext">
                  UX research & design, frontend development
                </div>
              </div>
            </div>
            <div className="descrip-rflex-zero">
              <div className="subsection-rheader">
                TEAM
              </div>
              <div className="project-rtext">
                Jasmine Cao & Leah Levin (research, design, & development)
              </div>
            </div>
            <div className="descrip-rflex-zero">
              <div className="subsection-rheader">
                TIMELINE
              </div>
              <div className="project-rtext">
                3 months
              </div>
            </div>
          </div>
        </div>
        <div className="section-header" id="when2meet">Existing Sites</div>
        <div className="project-text">
          Existing online recipes are often cluttered with
          long passages and distracting ads, creating a disruptive user experience
          for cooks. Although they are digital, these recipes often do not take advantage of
          web interactivity.
        </div>
        <img className="project-img" src={existingRecipes} alt="all recipes screenshot" />
        <div className="section-header" id="user-research"> User Research</div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header">INTERVIEWS</div>
        <div className="project-text">
          At the beginning of this process, our team had decided on a general target audience
          of home cooks. We conducted 4 interviews with potential users to better understand
          pain points and potential opportunities for designs.
          Main findings from interviews are summarized below:
        </div>
      </div>
      <div className="affinity-col">
        <div className="categories-wrap">
          <div className="categories-row-last">
            <div className="category-flex">
              <div className="category-name">ORGANIZATION METHODS</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Notion (project management software)
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Obsidian (project management software)
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Google Docs (text editor)
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Random photos & texts
                  </div>
                </div>
              </div>
            </div>
            <div className="category-rflex">
              <div className="category-name">COOKING HABITS</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Mix of planned meals & meals using available ingredients
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Recipes most often used for baking, not cooking
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Very ingredient-driven based on what is available, as well as cravings
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Subgroups: organized (recipes)
                    vs unstructured cooking
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mockup-col">
        <div className="mockup-flex-fix">
          <img className="mockup-img-lined" src={notionRecipes} alt="recipes in notion screenshots" />
        </div>
        <div className="mockup-flex-fix">
          <div className="iteration-caption">
            Example of a recipe database kept in Notion
          </div>
        </div>
      </div>
      {/* <div className="project-wrap">
        <img className="project-img" src={notionRecipes} alt="recipes in notion screenshot" />
        <div className="iteration-caption">
          Example of a recipe kept in Notion
        </div>
      </div> */}
      <div className="project-wrap">
        <div className="subsection-header-sec">
          KEY RESEARCH INSIGHTS
        </div>
        <div className="project-text-single">
          The 4 user interviews showed that the subgroup of cooks who enjoy organized, recipe-guided
          cooking lack a specialized tool for creating or editing personal recipes.
        </div>
        <ul>
          <li>
            <div className="list-text">Most people turn to text editors or project management tools to store recipes since they provide easy organization.</div>
          </li>
          <li>
            <div className="list-text">
              However, these softwares lack features specific to an optimized cooking experience
              (timers, serving size calculation, etc.)
            </div>
          </li>
        </ul>
        <div className="project-text-low">
          We decided to focus on this population of cooks who collect and organize their recipes,
          keeping our research in mind with the following guiding question:
        </div>
        <div id="how-might-card" className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            How might we design a digital recipe software that leverages interactive features to
            organize recipe creation and execution?
          </div>
        </div>
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header" id="solution">Solution</div>
            <div className="project-ltext">
              With a target audience established, the team went through several iterations
              of sketches, low-fidelity paper and digital prototypes, and high-fidelity digital
              prototypes. Some prototypes were then implemented in React for user testing in
              later stages as the app was built iteratively.
              <br />
              <br />
              User testing involved qualitative user feedback as well as statistical analysis of
              variants for certain features. The team collected feedback for usability as well as
              visual design throughout evaluations.
              [ADD SUMMARY MOCKUP OF FEATURES]
            </div>
          </div>
          <div className="section-rflex">
            <div className="descrip-lflex">
              <div className="stage-wrap">
                <div className="subsection-rheader-top">
                  WIREFRAMES
                </div>
                <div className="project-rtext">
                  2 iterations
                </div>
              </div>
              <div className="stage-lwrap">
                <div className="subsection-rheader-top">
                  PROTOTYPES
                </div>
                <div className="project-rtext">
                  3 iterations
                </div>
              </div>
            </div>
            <div className="descrip-rflex">
              <div className="subsection-rheader">
                USER TESTING
              </div>
              <div className="project-rtext">
                2 rounds
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header">LOW-FIDELITY IDEATION</div>
        <div className="project-text-low">
          We developed two low-fidelity prototypes using paper to experiment with
          modular elements of a recipe interface. The first prototype uses a standard one page
          layout, while the second prototype splits a recipe into sections for a more modular
          approach. Across both prototypes, we included
          the following features:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Embedded timers </span>
                in recipe steps to prevent juggling multiple applications while cooking.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Ingredient quantities displayed above steps </span>
                when hovering over the ingredient mentioned in a step.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Checkboxes </span>
                for users to track their progress of completed steps and
                ingredients used.
              </div>
            </li>
          </ul>
        </div>
        <div className="project-text-low">
          Evaluations found that
          <span style={{ 'font-weight': '600' }}> users preferred the second paper prototype </span>
          due to it&apos;s
          flexibility and readability.
        </div>
      </div>
      <div className="mockup-col-sm">
        <div className="mockup-row">
          <img className="mockup-limg-row" src={paper1} alt="paper prototype 1 of CookBooked ideation" />
          <img className="mockup-rimg-row" src={paper2} alt="paper prototype 1 of CookBooked ideation" />
        </div>
        <div className="mockup-flex-fix">
          <div className="iteration-caption">
            Paper prototype 1 (standard layout)
            & paper prototype 2
            (modular sections layout)
          </div>
        </div>
      </div>
      {/* <div className="mockup-col">
        <div className="mockup-flex-fix">
          <img className="mockup-img" src={paper1} alt="paper prototype 1 of CookBooked ideation" />
        </div>
        <div className="mockup-flex-fix">
          <img className="mockup-img" src={paper2} alt="paper prototype 2 of CookBooked ideation" />
        </div>
        <div className="mockup-flex-fix">
          <div className="iteration-caption">
            Left to right, top to bottom: LAMP, TouchChat, TDSnap, Proloquo2Go
          </div>
        </div>
      </div> */}
      <div className="project-wrap">
        <div className="subsection-header-sec">VISUAL DESIGN</div>
        <div className="project-text">
          Working from a mood board we created, the team gravitated
          towards a minimalist aesthetic with touches of color to match
          a sense of efficiency and organization.
        </div>
      </div>
      <div className="mockup-col-sm">
        <div className="mockup-flex-fix-first">
          <img className="mockup-img-lined" src={moodboard} alt="meet-wire-2" />
        </div>
        <div className="mockup-flex-fix">
          <img className="mockup-img-lined" src={styleGuide} alt="meet-wire-2" />
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">HIGH-FIDELITY PROTOTYPE</div>
        <div className="project-text">
          To prepare for user testing, I created a simple prototype of the app for the user flow
          of adding a timeslot to provide availability for a day. UI design choices involved:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Green and mint color palette </span>
                to create a calm appearance for the platform since research showed that scheduling
                was considered difficult or stressful by most users
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Work Sans as the main font </span>
                to maintain readability and professionalism with a sans serif font while still being
                friendly
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={meetproto1} alt="meet-proto-1" />
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">USABILITY TESTING</div>
        <div className="project-text">
          Using the initial prototype, I conducted user testing with 3 students, 1 from the user
          interviews and 2 others who had responded to the survey and were
          familiar with the project context. Users commented on:
          <ul>
            {/* <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Pleasant UI design </span>
                with a simple aesthetic and clear emphasis on actionable areas
              </div>
            </li> */}
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Good clarity with tapping interaction </span>
                for actually inputting availability, more mobile-friendly than dragging
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Lack of clarity with the home page </span>
                in terms of not understanding whether the main view shows group or individual
                availability
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>No visualization of &ldquo;My availability&rdquo; </span>
                since timeslots are all displayed as text instead of colored blocks like the
                group section
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Too many clicks </span>
                required to even get to the adding/editing availability functionality (3 clicks
                before availability is even added)
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={meettest1} alt="meet-test-1" />
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">PROTOTYPE: ITERATION 2</div>
        <div className="project-text">
          Based on the comments from Round 1 of user testing, I reorganized how the &ldquo;Add
          availability&rdquo; user flow begins:
          streamlined
          the “Add availability” user flow and created clear emphasis on separate
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Separate &ldquo;Me&rdquo; & &ldquo;Group&rdquo; </span>
                sections to address the confusion on what information the main
                view is initially presenting
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Reduced number of clicks </span>
                for adding/editing availability to streamline interaction
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Calendar layout </span>
                to improve visualization of availability
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={meetproto2} alt="meet-proto-2" />
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">USER TESTING: ROUND 2</div>
        <div className="project-text">
          Continuing with the same users from the first round of testing, I collected feedback on
          the second prototype. With this second round, comments mostly focused on how information
          could be better indicated visually:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>No side-by-side comparison of group & personal availability </span>
                limits the information a user has at their immediate disposal when inputting their
                own information
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Preference for further visual representation of availability </span>
                since calendar visualizes overall time period across days but not timeslots on
                individual days; suggestions made for a grid view calendar
              </div>
            </li>
            {/* <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Confusion with highlight vs.
                underline on date </span>
                for which one is meant to indicate selected date or whether availability
                was provided
              </div>
            </li> */}
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>One-click interaction </span>
                for adding/editing availability improves previous flow and feels
                less tedious
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">PROTOTYPE: ITERATION 3</div>
        <div className="project-text">
          The final solution mainly addresses the confusions and concerns around visual
          representation of information with the introduction of a secondary grid view calendar:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Grid view calendar </span>
                to supplement the original calendar view
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Scrollable side-by-side comparison columns </span>
                in the grid view to solve for the issue of not having the ability to compare
                personal and group availability in the previous prototype
              </div>
            </li>
            {/* <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Highlighted date indicates selected
                date </span>
                instead of a date with availability; this choice matches how a highlighted circle on
                &ldquo;AM&rdquo; or &ldquo;PM&rdquo; indicates selection
              </div>
            </li> */}
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Meeting information section </span>
                at the top of the screen to contextualize the meeting invite
              </div>
            </li>
            {/* <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Tapping in the grid to add a timeslot </span>
                in the grid view would allow for automatic population of the new timeslot&apos;s
                starting time, helping counteract the additional tap added with the interaction
                of switching from the main calendar to the grid view
              </div>
            </li> */}
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Info on number of people available </span>
                shown when a user taps a block of availability; this addresses the point from
                the original user research showing that people value general information about
                the group availability
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup-col">
        <div className="mockup-flex-fix">
          <img className="mockup-img" src={meetproto3} alt="meet-proto-3" />
        </div>
        <div className="mockup-flex-fix">
          <img id="meet-mobile-cards" className="mockup-img" src={meetmobilecards} alt="meet-proto-3" />
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">DESKTOP VERSION</div>
        <div className="project-text">
          After finalizing the mobile prototype, I created a desktop version to see how the mobile
          version could scale. Some minor features/interactions were incorporated in the desktop
          interface:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Timeslot preview when adding/editing availability </span>
                shown when a user taps a block of availability
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Hover interactions for editing & group availability info </span>
                shown when a user taps a block of availability
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="last-mockup-col">
        <div className="mockup-flex-fix">
          <img className="mockup-img" src={meetdesk} alt="meet-desk" />
        </div>
        <div className="mockup-flex-fix">
          <img id="meet-desk-cards" className="mockup-img" src={meetdeskcards} alt="meet-desk-cards" />
        </div>
      </div>
      <div className="project-wrap">
        <div className="section-header" id="prototype">Features</div>
        <div className="project-text">
          Interact with the final prototypes at the links below:
          <ul>
            <li>
              <div className="list-text">
                <a className="proto-link" target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/AHxq5BvD3YoUd5bdFdI9OC/Meetup-Prototype-(Mobile)?node-id=2%3A28&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A28">
                  Mobile Solution Prototype
                </a>
              </div>
            </li>
            <li>
              <div className="list-text">
                <a className="proto-link" target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/C9TwlLjWPRFaHFCLNZ32v2/Meetup-Prototype-(Desktop)?node-id=3%3A394&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A21">
                  Desktop Solution Prototype
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="proto-flex">
          <img className="device-mock" src={meetdevicemock} alt="meet-device-mock" />
          {/* <img className="device-mock-desk" src={meetdevicedesk} alt="meet-device-desk" /> */}
        </div>
        <div className="section-header" id="reflections">Reflections</div>
        <div className="project-text">
          As a student who has thought a lot about the pain points with group meeting scheduling,
          this project provided an opportunity to understand how people think about
          the digital tools and the factors that go into their processes. By conducting
          user research and testing, I learned to translate those key factors into
          visual representations of information that would be the most convenient to users.
          <br />
          <br />
          While the final solution addresses the main pain point of mobile usability,
          further exploration could be done on how the platform
          would appear from the organizer side. Since
          this project only focused on the invitee side, research on the
          other perspective could be an interesting way to complete an understanding
          of the problem. This current solution still explores a side of the problem
          that is impactful to understanding how people work to collaborate efficiently.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CookBooked;
