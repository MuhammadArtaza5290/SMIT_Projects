import React from "react";
import "../BlogPage/Blogpage.css";
import Card from "../../components/cards/Cards.jsx";
// import author from "../../author.png"
import cardData from "../../Components/Constants/constant.js"
import TagsData from "../../Components/Tags/tagsData.jsx";
import Topics from "../../Components/Topics/Topics.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAndroid } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
function BlogPage() {

  function createCards(card){
 return (
  <Card 
  key = {card.id}
  cardImg = {card.cardImg}
  cardWrapper = {card.cardWrapper}
  cardTitle = {card.cardTitle}
  cardInfo = {card.cardInfo}
  authorImg = {card.authorData.authorImg}
  authorName = {card.authorData.authorName}
  authorDate = {card.authorData.authorDate}
  authorTime = {card.authorData.authorTime}
  
  />
 )

  }
  return (
    <>
      <div class="main">
        <div class="container">
          {/* blog section */}

          <div class="blog">
            <h2 class="h2">Latest Blog Post</h2>

            <div class="blog-card-group">
            
                {cardData.map(createCards)}


            </div>

            <button class="btn load-more">Load More</button>
          </div>

          {/* <!--
    - ASIDE
  --> */}

          <div class="aside">
            <div class="topics">
              <h2 class="h2">Topics</h2>

              <Topics text="DataBase"  />
              <Topics text="Accessibility"  />
              <Topics text="Web Performance"  />

              
            </div>
            {/* tages */}

            <div class="tags">
              <h2 class="h2">Tags</h2>

              <div class="wrapper">
                <TagsData text="#nodejs" />
                <TagsData text="#a11y" />
                <TagsData text="#mobility" />
                <TagsData text="#inclusion" />
                <TagsData text="#webperf" />
                <TagsData text="#optimize" />
                <TagsData text="#performance" />
                
              </div>
            </div>

            <div class="contact">
              <h2 class="h2">Let's Talk</h2>

              <div class="wrapper">
                <p>
                  Do you want to learn more about how I can help your company
                  overcome problems? Let us have a conversation.
                </p>

                <ul class="social-link">
                  <li>
                    <a href="#" class="icon-box discord">
                      <FontAwesomeIcon icon={faMobileAndroid} className="logoo"  name="logo-discord"/>
                      {/* <ion-icon name="logo-discord"></ion-icon> */}
                    </a>
                  </li>

                  <li>
                    <a href="#" class="icon-box twitter">
                    <FontAwesomeIcon icon={faTwitter} className="logoo"  name="logo-discord"/>
                      {/* <ion-icon name="logo-twitter"></ion-icon> */}
                    </a>
                  </li>

                  <li>
                    <a href="#" class="icon-box facebook">
                    <FontAwesomeIcon icon={faFacebook} className="logoo"  name="logo-discord"/>
                      {/* <ion-icon name="logo-facebook"></ion-icon> */}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="newsletter">
              <h2 class="h2">Newsletter</h2>

              <div class="wrapper">
                <p>
                  Subscribe to our newsletter to be among the first to keep up
                  with the latest updates.
                </p>

                <form action="#">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />

                  <button type="submit" class="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;