import React from "react";
import './mainPage.scss';

const MainPage = () => {
  return (
    <div className="main">
      <div className="main__wrapper">
        <div className="main__wrapper_background">
          <div className="bitcoin">
            <img src="img/Bitcoin.png" alt="Bitcoin" />
          </div>
          <div className="litecoin">
            <img src="img/Litecoin.png" alt="Litecoin" />
          </div>
          <div className="ethereum">
            <img src="img/Ethereum.png" alt="Ethereum" />
          </div>
        </div>
        <h1 className="main__title">Do you want to Learn more <br />
          About cryptocurrencies <br />
          <span>quickly and easily ?</span></h1>
        <p className="main__subtitle">Subscribe to our channel to learn more</p>
        <div className="advantages">
          <div className="advantages__card">
            <p className="advantages__card-title">20k+</p>
            <p className="advantages__card-subtitle">subscribers</p>
          </div>
          <div className="advantages__card">
            <p className="advantages__card-title">19,5K</p>
            <p className="advantages__card-subtitle">successful cases</p>
          </div>
          <div className="advantages__card">
            <p className="advantages__card-title">4.8/5</p>
            <p className="advantages__card-subtitle">rating</p>
          </div>
        </div>
        <button className="btn">Join Whatsapp</button>
        <div className="apps">
          <div className="apps__app">
            <div className="apps__app_wrapper">
              <img className="apps__app-icon" src="img/icons/apple.png" alt="Google Play" />
            </div>
            <div className="apps__app_text">
              <p className="apps__app-subtitle">get it on</p>
              <p className="apps__app-title">Google play</p>
            </div>
          </div>
          <div className="apps__app">
            <div className="apps__app_wrapper">
              <img className="apps__app-icon" src="img/icons/gplay.png" alt="App Store" />
            </div>
            <div className="apps__app_text">
              <p className="apps__app-subtitle">Available on the</p>
              <p className="apps__app-title">App Store</p>
            </div>
          </div>
        </div>
        <div className="reviews">
          <div className="reviews__review">
            <div className="reviews__review_user">
              <div className="reviews__review_user_info">
                <div className="reviews__review_user_info-avatar">
                  <img src="img/avatars/photo1.png" alt="avatar" />
                </div>
                <div className="reviews__review_user_info_nickname">
                  <p className="reviews__review_user_info_nickname-name">Lorenzo</p>
                  <p className="reviews__review_user_info_nickname-nick">@lorenzoo</p>
                </div>
              </div>
              <div className="reviews__review_user-message">
                <p>
                  Amazing Telegram bot! Provides real-time crypto prices and news
                </p>
            </div>
            </div>
          </div>
          <div className="reviews__review reviews-left">
            <div className="reviews__review_user">
              <div className="reviews__review_user_info">
                <div className="reviews__review_user_info-avatar">
                  <img src="img/avatars/photo2.png" alt="avatar" />
                </div>
                <div className="reviews__review_user_info_nickname">
                  <p className="reviews__review_user_info_nickname-name">Adalina</p>
                  <p className="reviews__review_user_info_nickname-nick">@ada</p>
                </div>
              </div>
              <div className="reviews__review_user-message">
                <p>
                  Must-have bot for crypto traders. Accurate signals and analysis
                </p>
            </div>
            </div>
          </div>
          <div className="reviews__review">
            <div className="reviews__review_user">
              <div className="reviews__review_user_info">
                <div className="reviews__review_user_info-avatar">
                  <img src="img/avatars/photo3.png" alt="avatar" />
                </div>
                <div className="reviews__review_user_info_nickname">
                  <p className="reviews__review_user_info_nickname-name">Alexander</p>
                  <p className="reviews__review_user_info_nickname-nick">@alex_x</p>
                </div>
              </div>
              <div className="reviews__review_user-message">
                <p>
                  Superb cryptocurrency bot! Quick updates and reliable data
                </p>
            </div>
            </div>
          </div>
          <div className="reviews__review reviews-left">
            <div className="reviews__review_user">
              <div className="reviews__review_user_info">
                <div className="reviews__review_user_info-avatar">
                  <img src="img/avatars/photo4.png" alt="avatar" />
                </div>
                <div className="reviews__review_user_info_nickname">
                  <p className="reviews__review_user_info_nickname-name">Rushana</p>
                  <p className="reviews__review_user_info_nickname-nick">@Hana</p>
                </div>
              </div>
              <div className="reviews__review_user-message">
                <p>
                  Efficient and user-friendly bot. Simplifies crypto trading tasks
                </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MainPage;
