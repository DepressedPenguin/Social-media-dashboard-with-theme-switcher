import styles from "./overview.module.scss";

import facebook_icon from "../../assets/social_media_icons/icon-facebook.svg";
import twitter_icon from "../../assets/social_media_icons/icon-twitter.svg";
import instagram_icon from "../../assets/social_media_icons/icon-instagram.svg";
import youtube_icon from "../../assets/social_media_icons/icon-youtube.svg";

interface themeProp {
  theme: string;
}

export default function Overview({ theme }: themeProp) {
  return (
    <>
      <div className={theme}>
        <div className={`${styles.overview_section} background`}>
          <div className={`${styles.overview_headline} background`}>
            <h1 className="text">Overview - Today</h1>
          </div>
          <div className={styles.overview_social_media}>
            <div className={`${styles.box_media} box_social`}>
              <div className={styles.page_view}>
                <p className={styles.page_view_p}>Page View</p>
                <img
                  className={styles.image_custom}
                  src={facebook_icon}
                  alt="facebook icon"
                />
              </div>
              <div className={styles.page_number_rate}>
                <p className={`${styles.number_views} text`}>87</p>
                <div className={styles.rate_div}>
                  <i className="bi bi-caret-up-fill"></i>
                  <p className={styles.grow_rate_p}>3%</p>
                </div>
              </div>
            </div>
            <div className={`${styles.box_media} box_social`}>
              <div className={styles.page_view}>
                <p className={styles.page_view_p}>Page View</p>
                <img
                  className={styles.image_custom}
                  src={facebook_icon}
                  alt="facebook icon"
                />
              </div>
              <div className={styles.page_number_rate}>
                <p className={`${styles.number_views} text`}>52</p>
                <div className={styles.rate_div}>
                  <i
                    className={`${styles.custom_icon} bi bi-caret-down-fill`}
                  ></i>
                  <p className={`${styles.custom_icon}`}>2%</p>
                </div>
              </div>
            </div>
            <div className={`${styles.box_media} box_social`}>
              <div className={styles.page_view}>
                <p className={styles.page_view_p}>Page View</p>
                <img
                  className={styles.image_custom}
                  src={instagram_icon}
                  alt="instagram icon"
                />
              </div>
              <div className={styles.page_number_rate}>
                <p className={`${styles.number_views} text`}>5462</p>
                <div className={styles.rate_div}>
                  <i className="bi bi-caret-up-fill"></i>
                  <p className={styles.grow_rate_p}>2257%</p>
                </div>
              </div>
            </div>
            <div className={`${styles.box_media} box_social`}>
              <div className={styles.page_view}>
                <p className={styles.page_view_p}>Page View</p>
                <img
                  className={styles.image_custom}
                  src={instagram_icon}
                  alt="instagram icon"
                />
              </div>
              <div className={styles.page_number_rate}>
                <p className={`${styles.number_views} text`}>52k</p>
                <div className={styles.rate_div}>
                  <i className="bi bi-caret-up-fill"></i>
                  <p className={styles.grow_rate_p}>1375%</p>
                </div>
              </div>
            </div>
            <div className={`${styles.box_media} box_social`}>
              <div className={styles.page_view}>
                <p className={styles.page_view_p}>Page View</p>
                <img
                  className={styles.image_custom}
                  src={twitter_icon}
                  alt="twitter icon"
                />
              </div>
              <div className={styles.page_number_rate}>
                <p className={`${styles.number_views} text`}>117</p>
                <div className={styles.rate_div}>
                  <i className="bi bi-caret-up-fill"></i>
                  <p className={styles.grow_rate_p}>303%</p>
                </div>
              </div>
            </div>
            <div className={`${styles.box_media} box_social`}>
              <div className={styles.page_view}>
                <p className={styles.page_view_p}>Page View</p>
                <img
                  className={styles.image_custom}
                  src={twitter_icon}
                  alt="twitter icon"
                />
              </div>
              <div className={styles.page_number_rate}>
                <p className={`${styles.number_views} text`}>507</p>
                <div className={styles.rate_div}>
                  <i className="bi bi-caret-up-fill"></i>
                  <p className={styles.grow_rate_p}>553%</p>
                </div>
              </div>
            </div>
            <div className={`${styles.box_media} box_social`}>
              <div className={styles.page_view}>
                <p className={styles.page_view_p}>Page View</p>
                <img
                  className={styles.image_custom}
                  src={youtube_icon}
                  alt="youtube icon"
                />
              </div>
              <div className={styles.page_number_rate}>
                <p className={`${styles.number_views} text`}>117</p>
                <div className={styles.rate_div}>
                  <i
                    className={`${styles.custom_icon} bi bi-caret-down-fill`}
                  ></i>
                  <p className={styles.custom_icon}>19%</p>
                </div>
              </div>
            </div>
            <div className={`${styles.box_media} box_social`}>
              <div className={styles.page_view}>
                <p className={styles.page_view_p}>Page View</p>
                <img
                  className={styles.image_custom}
                  src={youtube_icon}
                  alt="youtube icon"
                />
              </div>
              <div className={styles.page_number_rate}>
                <p className={`${styles.number_views} text`}>1407</p>
                <div className={styles.rate_div}>
                  <i
                    className={`${styles.custom_icon} bi bi-caret-down-fill`}
                  ></i>
                  <p className={styles.custom_icon}>12%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
