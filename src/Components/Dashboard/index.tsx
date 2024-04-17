import styles from "./dashboard.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

// FACEBOOK ICON
import facebook_icon from "../../assets/social_media_icons/icon-facebook.svg";
import twitter_icon from "../../assets/social_media_icons/icon-twitter.svg";
import instagram_icon from "../../assets/social_media_icons/icon-instagram.svg";
import youtube_icon from "../../assets/social_media_icons/icon-youtube.svg";

interface DashboardProps {
  darkHandler: () => void;
  theme: string;
}

export default function Dashboard({ darkHandler, theme }: DashboardProps) {
  return (
    <>
      <div className={`${theme}`}>
        <div className={`${styles.dashboard_section} background`}>
          <div className={styles.top_side_headline}>
            <h1 className="text">Social Media Dashboard</h1>
            <p className={styles.followers_amount}>Total Followers : 22,004</p>
          </div>
          <div className={styles.top_side_darkmode}>
            <p>Dark Mode</p>
            {/* <div className={styles.dark_mode_switcher}> */}
            <label className={styles.bar}>
              <input type="checkbox" checked={theme === "dark"} />
              <span onClick={darkHandler} className={styles.point}></span>
            </label>
            {/* </div> */}
          </div>
        </div>
        <div className={`${styles.social_media_boxs} background`}>
          <div className={`${styles.box_social_facebook} box_social`}>
            <div className={styles.icon_facebook_user}>
              <img src={facebook_icon} alt="facebook icon" />
              <p>@nathanf</p>
            </div>
            <div className={styles.year_and_follower}>
              <h1 className={`${styles.year_facebook} text`}>1987</h1>
              <p className={styles.followers_name}>FOLLOWERS</p>
            </div>
            <div className={styles.rate_div}>
              <i className="bi bi-caret-up-fill"></i>
              <p className={styles.rate_grow}>12 Today</p>
            </div>
          </div>
          <div className={`${styles.box_social_twitter} box_social`}>
            <div className={styles.icon_facebook_user}>
              <img src={twitter_icon} alt="twitter icon" />
              <p>@nathanf</p>
            </div>
            <div className={styles.year_and_follower}>
              <h1 className={`${styles.year_facebook} text`}>1044</h1>
              <p className={styles.followers_name}>FOLLOWERS</p>
            </div>
            <div className={styles.rate_div}>
              <i className="bi bi-caret-up-fill"></i>
              <p className={styles.rate_grow}>99 Today</p>
            </div>
          </div>
          <div className={`${styles.box_social_instagram} box_social`}>
            <div className={styles.icon_facebook_user}>
              <img src={instagram_icon} alt="instagram icon" />
              <p>@realnathanf</p>
            </div>
            <div className={styles.year_and_follower}>
              <h1 className={`${styles.year_facebook} text`}>11k</h1>
              <p className={styles.followers_name}>FOLLOWERS</p>
            </div>
            <div className={styles.rate_div}>
              <i className="bi bi-caret-up-fill"></i>
              <p className={styles.rate_grow}>1099 Today</p>
            </div>
          </div>
          <div className={`${styles.box_social_youtube} box_social`}>
            <div className={styles.icon_facebook_user}>
              <img src={youtube_icon} alt="youtube icon" />
              <p>@Nathan F.</p>
            </div>
            <div className={styles.year_and_follower}>
              <h1 className={`${styles.year_facebook} text`}>8239</h1>
              <p className={styles.followers_name}>FOLLOWERS</p>
            </div>
            <div className={styles.rate_div_last}>
              <i
                className={`${styles.color_down_arrow} bi bi-caret-down-fill`}
              ></i>
              <p>144 Today</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
