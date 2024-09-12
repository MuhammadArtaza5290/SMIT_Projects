import React from "react";
// import blog_1 from "../../assets/images/blog-1.png";
// import constant from "../Constants/constant"
import "../../index.css";

function Card(props) {
  return (
    <>
      <div class="blog-card">
        <div class="blog-card-banner">
          <img
            src={props.cardImg}
            alt="Building microservices with Dropwizard, MongoDB & Docker"
            width="250"
            class="blog-banner-img"
          />
        </div>

        <div class="blog-content-wrapper">
          <button class="blog-topic text-tiny">{props.cardWrapper}</button>

          <h3>
            <a href="#" class="h3">
              {props.cardTitle}
            </a>
          </h3>

          <p class="blog-text">{props.cardInfo}</p>

          <div class="wrapper-flex">
            <div class="profile-wrapper">
              <img src={props?.authorImg} alt="Julia Walker" width="50" />
            </div>

            <div class="wrapper">
              <a href="#" class="h4">
                {props?.authorName}
              </a>

              <p class="text-sm">
                <time datetime="2022-01-17">{props.authorDate}</time>
                <span class="separator"></span>
                <ion-icon name="time-outline"></ion-icon>
                <time datetime="PT3M">{props?.authorTime}</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;