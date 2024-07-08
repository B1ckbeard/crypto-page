import React from "react";
import './mainPage.scss';
import ReviewCard from '../components/ReviewCard';

const MainPage = () => {

  const userReviewData =  [
    {id: 0, userName: 'Lorenzo', nick: 'lorenzoo', avatar: 'img/avatars/photo1.png',
       message: 'Amazing Telegram bot! Provides real-time crypto prices and news'},
    {id: 1, userName: 'Adalina', nick: '@ada', avatar: 'img/avatars/photo2.png',
      message: 'Must-have bot for crypto traders. Accurate signals and analysis'},
    {id: 2, userName: 'Alexander', nick: '@alex_x', avatar: 'img/avatars/photo3.png',
      message: 'Superb cryptocurrency bot! Quick updates and reliable data'},
    {id: 3, userName: 'Rushana', nick: '@Hana', avatar: 'img/avatars/photo4.png',
      message: 'Efficient and user-friendly bot. Simplifies crypto trading tasks'}
];

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
          <span>quickly and easily?</span></h1>
        <p className="main__subtitle">Subscribe to our channel to learn more</p>
        <div className="advantages">
          <div className="advantages__card subscribers">
            <p className="advantages__card-title">20k+</p>
            <p className="advantages__card-subtitle">subscribers</p>
          </div>
          <div className="advantages__card cases">
            <p className="advantages__card-title">19,5K</p>
            <p className="advantages__card-subtitle">successful cases</p>
          </div>
          <div className="advantages__card rating">
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
          <div className="apps__app appstore">
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
          {userReviewData.map((review, index) => (
            index % 2 === 1 ?
            <ReviewCard key={index} data = {review} position = "left"/>
            :
            <ReviewCard key={index} data = {review}/>
          ))}
        </div>
      </div>
    </div>
  )
};

export default MainPage;
