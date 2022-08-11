/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../assets/index.css';
// import meetup from '../assets/meetup-mockup (2).png';
import chapter from '../assets/chapter-mockup.png';
import meetwire1 from '../assets/meet-wire-1.png';
import meetwire2 from '../assets/meet-wire-2.png';
import meetproto1 from '../assets/meet-proto-1.png';
import meetproto2 from '../assets/meet-proto-2.png';
import meetproto3 from '../assets/meet-proto-3.png';
import meettest1 from '../assets/meet-test-1.png';
import meetmobilecards from '../assets/meet-mobile-cards.png';
import meetdeskcards from '../assets/meet-desk-cards.png';
import meetdesk1 from '../assets/meet-desk-1.png';
import meetdesk2 from '../assets/meet-desk-2.png';
// import meetdevicemobile from '../assets/meet-device-mobile.png';
// import meetdevicedesk from '../assets/meet-device-desk.png';
import meetdevicemock from '../assets/meet-device-mock.png';
import NavBar from './NavBar';
import Footer from './Footer';

function Chapter({ currPage, setCurrPage }) {
  useEffect(() => {
    setCurrPage('');
    document.title = 'Chapter | Sylvia Zhao';
    // window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Chapter">
      <NavBar currPage={currPage} />
      <div id="container-floating">
        <div className="table-text2 nds">
          <Link to="/chapter#overview">
            <p className="letter">OVERVIEW</p>
          </Link>
        </div>
        <div className="table-text3 nds">
          <Link to="/chapter#user-research">
            <p className="letter">USER RESEARCH</p>
          </Link>
        </div>
        <div className="table-text4 nds">
          <Link to="/chapter#solution">
            <p className="letter">SOLUTION</p>
          </Link>
        </div>
        <div className="table-text5 nds">
          <Link to="/chapter#prototype">
            <p className="letter">PROTOTYPE</p>
          </Link>
        </div>
        <div className="table-text6 nds">
          <Link to="/chapter#reflections">
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
        <div className="project-header">Chapter</div>
        <div className="project-info">
          Designing a virtual book club app for readers
        </div>
        <img className="project-img" src={chapter} alt="chapter mockup" />
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header" id="overview">Overview</div>
            <div className="project-ltext">
              Reading communities exist on various social platforms online, but what about
              the traditional book club experience? Coming from my own efforts to read more
              with friends, I wondered how social interactions related to reading could be
              transferred into a digital experience.
              <br />
              <br />
              This project presents a mobile solution for how users might
              track progress and engage in discussions in a virtual book club.
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
        <div className="section-header" id="user-research"> User Research</div>
        <div className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            &ldquo;I definitely care more about my friends&apos; opinions, I&apos;d probably
            blow off an online comment I disagree with&rdquo;
            <span style={{ 'font-style': 'italic' }}> &mdash; Reader</span>
          </div>
        </div>
        <div className="subsection-header">USER INTERVIEWS</div>
        <div className="project-text">
          The primary goal of user research was to understand what type of platform would be
          most beneficial to supporting social connections between readers (ie. social media,
          progress tracker, etc).
          I interviewed 4 people ranging in age from 20 to mid 50s who read frequently; questions
          focused on platforms that they currently use related to reading, how they find books
          to read, and how they interact with people virtually and in-person concerning books.
          One interviewee was an active member of an in-person book club.
          <br />
          <br />
          Comments from the interviews showed that people generally do not directly engage with
          other readers online but prefer to discuss thoughts with friends/family. People also
          noted that a key difference between virtual and in-person interactions is that
          they value their friends&apos; opinions much more than comments from online
          platforms. In the case of having a different perspective on a book from
          a friend, interviewees said that they would be much less likely to be dismissive
          of that perspective compared to their reaction to an online comment.
        </div>
      </div>
      <div className="affinity-col">
        <div className="categories-wrap">
          <div className="categories-row">
            <div className="category-flex">
              <div className="category-name">USE OF EXISTING PLATFORMS</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    GoodReads: good for tracking and organizing what
                    you read
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    TikTok: too easy to buy into hype of popular books
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Instagram: too visually focused, &ldquo;builds
                    an aesthetic&rdquo; of reading
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Sometimes read & leave online reviews (hard to avoid spoilers)
                  </div>
                </div>
              </div>
            </div>
            <div className="category-rflex">
              <div className="category-name">HOW TO FIND BOOKS TO READ</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Heavy reliance on word of mouth/recs. from family and friends
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Recommendations on social media (mostly Instagram & TikTok), often bad
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Books from same author as previous books
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Will read blurbs of random books to see what is interesting
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="categories-row-last">
            <div className="category-flex">
              <div className="category-name">INTERACTIONS WITH FRIENDS</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Better for discussing specific thoughts/obscure questions
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Enjoy more in-depth conversations to share thoughts
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    More open to discussing different opinions
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Perspectives are usually similar on topics/books
                  </div>
                </div>
              </div>
            </div>
            <div className="category-rflex">
              <div className="category-name">INTERACTIONS ONLINE</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Generally no direct interaction with people
                    online (forums/comment sections)
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Online resources good for fast answers & info
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    More readily dismissive of opinions that differ from own
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Still interesting to see range of perspectives
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">
          KEY RESEARCH INSIGHTS
        </div>
        <div className="project-text-single">
          User interviews provided the following core insights that framed the final design:
        </div>
        <ul>
          <li>
            <div className="list-text">Readers value their friends&apos; opinions much more highly than those of people online</div>
          </li>
          <li>
            <div className="list-text">
              Online platforms are interesting since they provide
              diverse perspectives and quick answers to minor questions
            </div>
          </li>
          <li>
            <div className="list-text">
              Readers enjoy being able to track progress &
              organize what books they have read/want to read
            </div>
          </li>
        </ul>
        <div className="project-text-low">
          Due to emphasis on how people use interactions from friends&apos; as well as
          online platforms to drive their reading decisions and processes, my guiding
          question focused on balancing the different value that both types of
          interaction bring to readers.
        </div>
        <div id="how-might-card" className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            How might we create a virtual experience that gives people a space to
            both interact with friends as well as access a larger community?
          </div>
        </div>
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header" id="solution">Solution</div>
            <div className="project-ltext">
              I chose to design a mobile app for a virtual book club to help
              readers engage with their friends on books they read. The app
              allows users to track their reading progress, discuss books within
              their private group, and discuss with a public community of readers.
              I designed for mobile due to the convenience of people chatting with
              friends on mobile devices on social apps.
              <br />
              <br />
              My process involved wireframing and prototyping with user testing being conducted
              after wireframing and the first prototype iteration. The final solution presents
              user flows for updating reading progress in a group and posting a reply to a group
              discussion.
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
      <div className="project-text">USER FLOW DIAGRAM SECTION??</div>
      <div className="project-wrap">
        <div className="subsection-header">WIREFRAMES: ITERATION 1</div>
        <div className="project-text">
          The first iteration focused on the layout of the home and group pages
          to explore the best way for users to navigate to important features
          within the group book club section of the app. I also wireframed
          the group progress page for what a group is currently reading.
          Main sections on the pages included:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;Currently Reading&rdquo; </span>
                section at the top of the home page for users to quickly access the &ldquo;
                Update My Progress&rdquo; feature and to provide summary of current reading
                activity. Also included on the group page to access the group progress page.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;Quick Actions&rdquo; </span>
                on the home page for accessing the chat feature & the group progress page.
                This aims to help the user easily access features they might engage with
                frequently.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;My Progress&rdquo; </span>
                section on the group page to give the user a summary of their activity
                and to allow for updating their reading progress. This addresses comments
                from user research about organizational tools.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;Group Overview&rdquo; </span>
                on the group page to show users how other people in their group are progressing
                through their reading. The timeline format visualizes how far each group
                member is in the book.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;Discussions&rdquo; & &ldquo;Chat&rdquo; </span>
                sections on the group progress page to allow users to engage in public community
                discussions as well as private chatting with their group.
              </div>
            </li>
          </ul>
        </div>
        <div className="project-text">
          TO DO: ADD USER FLOW DIAGRAM
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={meetwire1} alt="meet-wire-1" />
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">WIREFRAMES: ITERATION 2</div>
        <div className="project-text">
          EXPLAIN RATIONALE FOR CHAPTER BY CHAPTER UPDATING: SPOILERS AND GROUP OVERVIEW TIMELINE
          The second iteration of wireframes made minor adjustments to the
          way days were displayed in “My availability,” as well as the layout of buttons.
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;Save changes&rdquo; button </span>
                in &ldquo;My availability&rdquo; was changed to a back arrow in the upper-left
                corner to better indicate to a user how to return to the main &ldquo;Group
                availability&rdquo; view. A &ldquo;Cancel&rdquo; button and back arrow
                were also added to the editing a day view.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;Add timeslot&rdquo; button </span>
                in the section for editing a specific day&apos;s availability was moved to be
                grouped closer to the existing timeslots a user has. This better associates the
                button&apos;s action with its results.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={meetwire2} alt="meet-wire-2" />
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">PROTOTYPE: ITERATION 1</div>
        <div className="project-text">
          To prepare for user testing, I created a simple prototype of the app for the user flow
          of adding a timeslot to provide availability for a day. UI design choices involved:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Green and mint color palette </span>
                to create a calm appearance for the platform since research showed that scheduling
                was considered difficult or stressful by most users.
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
        <div className="subsection-header-sec">USER TESTING: ROUND 1</div>
        <div className="project-text">
          Using the initial prototype, I conduced user testing with 3 students, 1 from the user
          interviews and 2 others who had responded to the survey and were
          familiar with the project context. Users commented on:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Pleasant UI design </span>
                with a simple aesthetic and clear emphasis on actionable areas
              </div>
            </li>
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
          Based on the comments from Round 1 of user testing, I reorganized how the &ldquo;
          Add availability&rdquo; user flow begins:
          streamlined
          the “Add availability” user flow and created clear emphasis on separate
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Separate &ldquo;Me&rdquo; & &ldquo;Group&rdquo; </span>
                sections to address the confusion on what information the main
                view is initially presenting; indicated by buttons at the top to toggle the view
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Reduced number of clicks </span>
                for adding/editing availability to streamline interaction; both functions are
                accessed with 1 click in this iteration
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Calendar layout </span>
                to improve visualization of availability by highlighting days with provided
                availability in bright mint and indicating the currently selected day with
                an underline
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
                <span style={{ 'font-weight': '600' }}>No side-by-side comparision of group & personal availability </span>
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
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Confusion with highlight vs. underline on date </span>
                for which one is meant to indicate selected date or whether availability
                was provided
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
                to supplement the original calendar view; the grid shows individual days
                while the original layout still gives an overview of all dates that a
                user can select from
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Scrollable side-by-side comparison columns </span>
                in the grid view to solve for the issue of not having the ability to compare
                personal and group availability in the previous prototype; a key indicates the
                two types of availability shown by the columns
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Highlighted date indicates selected date </span>
                instead of a date with availability; this choice matches how a highlighted circle on
                &ldquo;AM&rdquo; or &ldquo;PM&rdquo; indicates selection, so instead, a dot under
                a date is used to show that a user previded availability
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Meeting information section </span>
                at the top of the screen contextualizes the meeting invite and informs
                how users should provide their availability based on the meeting length
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Tapping in the grid to add a timeslot </span>
                in the grid view would allow for automatic population of the new timeslot&apos;s
                starting time, helping counteract the additional tap added with the interaction
                of swtiching from the main calendar to the grid view
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
      </div>
      <div className="mockup">
        <img className="mockup-img" src={meetproto3} alt="meet-proto-3" />
        <img id="meet-mobile-cards" className="mockup-img" src={meetmobilecards} alt="meet-proto-3" />
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
                shown when a user taps a block of availability; this addresses the point from
                the original user research showing that people value general information about
                the group availability
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Hover interactions for editing & group availability info </span>
                shown when a user taps a block of availability; this addresses the point from
                the original user research showing that people value general information about
                the group availability
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="last-mockup">
        <img className="mockup-img" src={meetdesk1} alt="meet-desk-1" />
        <img id="meet-desk-2" className="mockup-img" src={meetdesk2} alt="meet-desk-2" />
        <img id="meet-desk-cards" className="mockup-img" src={meetdeskcards} alt="meet-desk-cards" />
      </div>
      <div className="project-wrap">
        <div className="section-header" id="prototype">Final Protoype</div>
        <div className="project-text">
          Interact with the final prototypes at the links below:
          <ul>
            <li>
              <div className="list-text">
                <a className="proto-link" href="https://www.figma.com/proto/AHxq5BvD3YoUd5bdFdI9OC/Meetup-Prototype-(Mobile)?node-id=2%3A98&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A28">
                  Mobile Solution Prototype
                </a>
              </div>
            </li>
            <li>
              <div className="list-text">
                <a className="proto-link" href="https://www.figma.com/proto/C9TwlLjWPRFaHFCLNZ32v2/Meetup-Prototype-(Desktop)?node-id=3%3A394&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A21">
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

export default Chapter;
