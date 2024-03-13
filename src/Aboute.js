
import React from 'react'

const Aboute = () => {
  return (
    <>
      <div className='main_about'>
        <div className='AbouteContainer'>
          <h2>Blog-Adda</h2>
          <p>Blog Adda is a website where you can write your daily blogs in one place and share them with everyone, all completely free without any extra charges. </p>
        </div>
        <div className="usesAndfunctionality"><hr style={{border:"0px solid rgb(108, 167, 240)"}}/>
          <div className="uses"><h3>Uses :-</h3>
            <p><br />
              Welcome to Blog Adda. To create a blog, first click on the create button. After that, a small form will appear where you can write your name and the title of your blog. Then, start writing your blog and finally click on the add button. Your work is done. The browser will automatically take you to your blog page, and in a short while, your blog will appear in front of you. Before using Blog Adda, make sure that your internet connection is on. If your blog doesn't update, reload your browser.ThankYou...<br /><br />
            </p></div>

          <hr style={{border:"0px solid rgb(108, 167, 240)"}} /><div className="functionality"><h3>Functionality :-</h3>
            
            <p>
              Blog Adda is a fully functional program-based project that utilizes various front-end technologies in its development.
              <ul>
                <li>Primarily, JavaScript library React has been used in its development, which is useful for creating component-based websites.</li>
                <li>
                  Inside React, JSX (JavaScript XML) has been used in it. Additionally, React Router DOM assists in navigating to the About, Blog, or Create page with just one click.</li>
                <li>CSS plays a crucial role in designing the UI. With its help, fonts have been aligned properly on all pages, text has been given color, and boxes have been adjusted with margin, padding, width, and centered using only CSS.</li>
                <li>In creating the API, we utilized the assistance of JSON Server, which we have live-rendered using "Render," enabling us to easily access our blogs anytime, anywhere.</li>
                <li>Our JSON server runs on the HTTP: port, which remains live at all times.</li>
                <li>GitHub has played a significant role in hosting this project.</li>
              </ul>
            </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Aboute
