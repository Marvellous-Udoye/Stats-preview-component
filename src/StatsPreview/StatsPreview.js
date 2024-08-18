import './statspreview.css';
import stats from '../images/image-header-desktop.jpg';
import smallScreenStats from '../images/image-header-mobile.jpg';

export default function StatsPreview() {
  return (
    <div className='stats_ctn'>
      <div className='stats_card'>
        <div className='stats_info'>
          <p>Get <span>insights</span> that help your business grow.</p>
          <p className='stats_info_second_p'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
          <div className='stats'>
            <span>
              <p>10k+</p>
              <p>COMPANIES</p>
            </span>
            <span>
              <p>314</p>
              <p>TEMPLATES</p>
            </span>
            <span>
              <p>12M+</p>
              <p>QUERIES</p>
            </span>
          </div>
        </div>
        <div className='image_ctn'>
          <img
            src={stats}
            alt='Image'
            width={540}
            height={446}
            className='stats_image'
          />
          <img
            src={smallScreenStats}
            alt='Image'
            width={327}
            height={240}
            className='small_screen_stats_image'
          />
          <div className='image_overlay'></div>
        </div>
      </div>
    </div>
  );
}




