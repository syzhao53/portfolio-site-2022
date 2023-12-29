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
import features from '../assets/cookbooked-features.png';
import paper1 from '../assets/cookbooked-paper-1.png';
import paper2 from '../assets/cookbooked-paper-2.png';
import moodboard from '../assets/cookbooked-moodboard.png';
import hifi1 from '../assets/cookbooked-hifi-1.png';
import hifi2 from '../assets/cookbooked-hifi-2.png';
import library1 from '../assets/cookbooked-library-1.png';
import revis1 from '../assets/cookbooked-hifi-revis-1.png';
import revis2 from '../assets/cookbooked-hifi-revis-2.png';
import revis3 from '../assets/cookbooked-hifi-revis-3.png';
import revis4 from '../assets/cookbooked-hifi-revis-4.png';
import revisSummary from '../assets/cookbooked-revis-summary.png';
// import revisAll from '../assets/cookbooked-all-revis.png';
import variant1 from '../assets/cookbooked-variant-1.png';
import variant2 from '../assets/cookbooked-variant-2.png';
import final1 from '../assets/cookbooked-final-1.png';
import final2 from '../assets/cookbooked-final-2.png';
import final3 from '../assets/cookbooked-final-3.png';
import styleGuide from '../assets/cookbooked-style-guide.png';
import kitchenMock from '../assets/cookbooked-kitchen-mock.png';

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
          <Link to="/cookbooked#existing">
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
          <Link to="/cookbooked#outcome">
            <p className="letter">OUTCOME</p>
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
        <div className="section-header" id="overview">Overview</div>
        <div className="section-flex">
          <div className="section-lflex">
            {/* <img className="gif" src={meetupGif} alt="all recipes screenshot" /> */}
            <div className="project-ltext-large">
              An interactive web application designed to help cooks follow
              and organize recipes
            </div>
            <div className="project-ltext-zero">
              Each member of the team was involved in the
              research, design, and programming of the web app.
              The final app was implemented with React along with the Tailwind CSS library.
            </div>
          </div>
          <div className="section-rflex-buttons">
            <a className="overview-buttons" href="https://github.com/jasminecao/cookbooked">GitHub</a>
            <a className="overview-buttons" href="https://cookbooked-mocha.vercel.app/recipe/apple_pie">Final app</a>
          </div>
        </div>
        <div className="descrip-flex">
          <div className="descrip-section">
            <div className="subsection-header">
              ROLE
            </div>
            <div className="project-text-zero">
              UX research & design
              <br />
              Frontend development
            </div>
          </div>
          <div className="descrip-section">
            <div className="subsection-header">
              TEAM
            </div>
            <div className="project-text">
              Jasmine Cao & Leah Levin (research, design, & dev)
            </div>
          </div>
          <div className="descrip-section-last">
            <div className="subsection-header">
              TIMELINE
            </div>
            <div className="project-text">
              3 months
            </div>
          </div>
        </div>
      </div>
      <div className="img-full-wrap cookbooked-bkgrd">
        <img className="img-full" src={features} alt="cookbooked features summary" />
      </div>
      <div className="project-wrap">
        {/* <img className="project-img-top" src={features} alt="cookbooked features summary" /> */}
        <div className="section-header" id="existing">Existing Sites</div>
        <div className="project-ltext-large">
          Cluttered, disruptive user experiences
        </div>
        <div className="project-text">
          Existing online recipes are full of long passages and distracting ads.
          Although they are digital, these recipes often do not take advantage of
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
      <div className="project-wrap">
        <div className="subsection-header-sec">
          KEY RESEARCH INSIGHTS
        </div>
        {/* <div className="project-text-single">
          The 4 user interviews showed that the subgroup of cooks who enjoy organized, recipe-guided
          cooking lack a specialized tool for creating or editing personal recipes.
        </div> */}
        <div className="section-flex">
          <div className="section-lflex-half">
            <div className="project-ltext-large">
              Co-opting other tools
            </div>
            <div className="project-text">
              Cooks turn to text editors & project management tools to store recipes because
              of easy organization
            </div>
          </div>
          <div className="section-rflex-half">
            <div className="project-ltext-large">
              No specialized features
            </div>
            <div className="project-text">
              Non-cooking tools lack features specific for optimizing the cooking experience
            </div>
          </div>
        </div>
        {/* <ul>
          <li>
            <div className="list-text">Most people turn to text editors
            or project management tools to store recipes since they provide easy organization.</div>
          </li>
          <li>
            <div className="list-text">
              However, these softwares lack features specific to an optimized cooking experience
              (timers, serving size calculation, etc.)
            </div>
          </li>
        </ul> */}
        <div className="project-text-low">
          We decided to focus on this population of cooks who collect and organize their recipes,
          keeping our research in mind with the following guiding question:
        </div>
        <div id="how-might-card" className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            How might we design a digital recipe software that leverages interactive features
            for home cooks to organize and follow recipes?
          </div>
        </div>
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header" id="solution">Solution</div>
            <div className="project-ltext-large">
              Modular recipe sections with interactive organizational features
            </div>
            <div className="project-ltext">
              The final design focused on how users can execute a recipe when cooking.
              The team iterated through low-fidelity paper and digital prototypes as
              well as high-fidelity digital prototypes. Some prototypes were then implemented
              in React for user testing in
              later stages as the app was built iteratively.
              {/* <br />
              <br />
              User testing involved qualitative user feedback as well as statistical analysis of
              variants for certain features. The team collected feedback for usability as well as
              visual design throughout evaluations. */}
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
        {/* <img className="features-img" src={features} alt="cookbooked features summary" /> */}
      </div>
      <div className="project-wrap">
        <div className="subsection-header">LOW-FIDELITY IDEATION</div>
        <div className="project-text-low">
          We developed two low-fidelity prototypes using paper to experiment with
          modular elements of a recipe interface. The first prototype uses a standard one page
          layout, while the second prototype splits a recipe into subsections for a more modular
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
                <span style={{ 'font-weight': '600' }}>Inline ingredient quantities </span>
                displayed when hovering over the ingredient mentioned in a step.
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
            (modular subsections layout)
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
          In order to conduct usability testing, we prototyped the interactions
          for checkboxes, the sidebar, timers, and inline ingredient quantity display.
          A library page contextualizes the recipe experience
          {/* <ul>
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
          </ul> */}
        </div>
      </div>
      <div className="mockup-col-sm">
        <div className="mockup-flex-fix-first">
          <img className="mockup-img-lined" src={library1} alt="library view" />
        </div>
        <div className="mockup-flex-fix-first">
          <img className="mockup-img-lined" src={hifi1} alt="intro view" />
        </div>
        <div className="mockup-flex-fix">
          <img className="mockup-img-lined" src={hifi2} alt="main recipe section view" />
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">USABILITY TESTING</div>
        <div className="project-text">
          Using the hi-fi prototype, we collected feedback from 7 users and revised our
          intial screens.
          Revisions centered around:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Emphasized current recipe subsection </span>
                with a stronger highlighted treatment in the sidebar
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Functionality in library </span>
                added for searching, filtering, and creating recipes
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Timer cancellation </span>
                added to improve error prevention
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="mockup-col-sm">
        <div className="mockup-flex-fix-first">
          <img className="mockup-img-lined" src={revisAll} alt="library view" />
        </div>
      </div> */}
      <div className="mockup-col-sm">
        <div className="mockup-flex-fix-first">
          <img className="mockup-img" src={revisSummary} alt="summary of revisions" />
        </div>
        <div className="mockup-row-first">
          <img className="mockup-limg-row" src={revis1} alt="revision of library view" />
          <img className="mockup-rimg-row" src={revis2} alt="revision of intro page" />
        </div>
        <div className="mockup-row-first">
          <img className="mockup-limg-row" src={revis3} alt="revision of main recipe section view" />
          <img className="mockup-rimg-row" src={revis4} alt="revision of main recipe section view with timers running" />
        </div>
        <div className="mockup-flex-fix">
          <div className="iteration-caption">
            Main changes and notes
          </div>
        </div>
        {/* <div className="mockup-flex-fix-first">
          <img className="mockup-img-lined" src={library1} alt="library view revision" />
        </div>
        <div className="mockup-flex-fix-first">
          <img className="mockup-img-lined" src={library1} alt="library view revision" />
        </div>
        <div className="mockup-flex-fix-first">
          <img className="mockup-img-lined" src={library1} alt="library view revision" />
        </div> */}
      </div>
      <div className="project-wrap">
        <div className="project-text">
          Since we received mixed feedback on the inline ingredient hovering,
          we conducted an A/B test on the following variants for ingredient display:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Variant 1: Separate ingredients list & keeping inline hovering </span>
                to address concerns about the hovering&apos;s convenience while still having
                the hover as an option
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Variant 2: Ingredients under steps & removing inline hovering </span>
                for a more direct approach
              </div>
            </li>
          </ul>
          <div className="project-text-low">
            By timing how long it took users to find a specified ingredient quantity for a step,
            we used a t-test to determine that users struggled less with variant 2.
            A Likert scale survey on perceived task difficulty also demonstrated that
            <span style={{ 'font-weight': '600' }}> variant 2 was a more convenient, intuitive experience.</span>
          </div>
        </div>
      </div>
      <div className="mockup-col-sm">
        <div className="mockup-row">
          <img className="mockup-limg-row" src={variant1} alt="variant 1 with separate list & hovering" />
          <img className="mockup-rimg-row" src={variant2} alt="variant 2 with ingredients under steps" />
        </div>
        <div className="mockup-flex-fix">
          <div className="iteration-caption">
            Variants 1 & 2 for A/B testing
          </div>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">FINAL DESIGN</div>
        <div className="project-text">
          The final design incorporates feedback across several iterations, delivering
          a recipe layout using subsections, embedded timers, and progress tracking.
        </div>
      </div>
      <div className="mockup-col-sm-last">
        <div className="mockup-flex-fix-first">
          <img className="mockup-img-lined" src={final1} alt="library view final" />
        </div>
        <div className="mockup-flex-fix-first">
          <img className="mockup-img-lined" src={final2} alt="intro view final" />
        </div>
        <div className="mockup-flex-fix">
          <img className="mockup-img-lined" src={final3} alt="main recipe section view final" />
        </div>
      </div>
      {/* <div className="project-wrap">
        <div className="subsection-header-sec">USER TESTING: ROUND 2</div>
        <div className="project-text">
          Continuing with the same users from the first round of testing, I collected feedback on
          the second prototype. With this second round, comments mostly focused on how information
          could be better indicated visually:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>
                No side-by-side comparison of group & personal availability </span>
                limits the information a user has at their immediate disposal when inputting their
                own information
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>
                Preference for further visual representation of availability </span>
                since calendar visualizes overall time period across days but not timeslots on
                individual days; suggestions made for a grid view calendar
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>One-click interaction </span>
                for adding/editing availability improves previous flow and feels
                less tedious
              </div>
            </li>
          </ul>
        </div>
      </div> */}
      {/* <div className="project-wrap">
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
                <span style={{ 'font-weight': '600' }}>
                Scrollable side-by-side comparison columns </span>
                in the grid view to solve for the issue of not having the ability to compare
                personal and group availability in the previous prototype
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Meeting information section </span>
                at the top of the screen to contextualize the meeting invite
              </div>
            </li>
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
      </div> */}
      {/* <div className="mockup-col">
        <div className="mockup-flex-fix">
          <img className="mockup-img" src={meetproto3} alt="meet-proto-3" />
        </div>
        <div className="mockup-flex-fix">
          <img id="meet-mobile-cards" className="mockup-img"
          src={meetmobilecards} alt="meet-proto-3" />
        </div>
      </div> */}
      {/* <div className="project-wrap">
        <div className="subsection-header-sec">DESKTOP VERSION</div>
        <div className="project-text">
          After finalizing the mobile prototype, I created a desktop version to see how the mobile
          version could scale. Some minor features/interactions were incorporated in the desktop
          interface:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>
                Timeslot preview when adding/editing availability </span>
                shown when a user taps a block of availability
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>
                Hover interactions for editing & group availability info </span>
                shown when a user taps a block of availability
              </div>
            </li>
          </ul>
        </div>
      </div> */}
      {/* <div id="last-mockup-col">
        <div className="mockup-flex-fix">
          <img className="mockup-img" src={meetdesk} alt="meet-desk" />
        </div>
        <div className="mockup-flex-fix">
          <img id="meet-desk-cards" className="mockup-img" src={meetdeskcards}
          alt="meet-desk-cards" />
        </div>
      </div> */}
      <div className="project-wrap">
        <div className="section-header" id="outcome">Outcome</div>
        <div className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            &ldquo;I really love the timer!
            I usually have one timer on the microwave, one on the oven,
            and one on my phone. I love that I can have multiple timers in the app.&rdquo;
            <span style={{ 'font-style': 'italic' }}> &mdash; Tester</span>
          </div>
        </div>
        <div className="project-text">
          For final feedback on CookBooked, users were very positive about the
          app&apos;s visual aesthetic and usability. Users appreciated the flexibility of the
          design and the thought given to a streamlined layout for following recipes.
          <br />
          <br />
          Check out our deployed site and our code at the links below:
          <ul>
            <li>
              <div className="list-text">
                <a className="proto-link" target="_blank" rel="noopener noreferrer" href="https://cookbooked-mocha.vercel.app/recipe/apple_pie">
                  Deployed Web App (Desktop Only)
                </a>
              </div>
            </li>
            <li>
              <div className="list-text">
                <a className="proto-link" target="_blank" rel="noopener noreferrer" href="https://github.com/jasminecao/cookbooked">
                  GitHub Repository
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="proto-flex">
          <img className="device-mock" src={kitchenMock} alt="meet-device-mock" />
          {/* <img className="device-mock-desk" src={meetdevicedesk} alt="meet-device-desk" /> */}
        </div>
        <div className="section-header" id="reflections">Reflections</div>
        <div className="project-text">
          Throughout the process of creating CookBooked, we
          learned about the best ways to balance creative features
          with simplicity and clarity for cooks. We hope that our
          design effectively reimagines the digital recipe experience and
          moves beyond the capabilities of existing text editors for recipe creation.
          <br />
          <br />
          Although we explored many methods for recipe organization,
          further user research would allow us to understand how cooks in
          different situations may need additional tools. Additional user
          research could expand the app towards voice control interactions
          as well as the editing functionalities the current design implicitly assumes.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CookBooked;
