import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image'
const ProjectCard = ({ project }) => {
  const videos = [
  {
    thumbnail: 'https://img.staticmb.com/mbimages/project/2025/02/10/0Cych7rPbMs_0.jpg',
    authorImg: 'https://img.staticmb.com/mbimages/youtubecreators/SamracanaProjectsLLP.jpg',
    authorName: 'Samracana Projects LLP',
    views: '5.1k',
    followers: 12
  },
  {
    thumbnail: 'https://img.staticmb.com/mbimages/project/2025/02/10/0Cych7rPbMs_0.jpg',
    authorImg: 'https://img.staticmb.com/mbimages/youtubecreators/SamracanaProjectsLLP.jpg',
    authorName: 'Samracana Projects LLP',
    views: '5.1k',
    followers: 12
  },
  {
    thumbnail: 'https://img.staticmb.com/mbimages/project/2025/02/10/0Cych7rPbMs_0.jpg',
    authorImg: 'https://img.staticmb.com/mbimages/youtubecreators/SamracanaProjectsLLP.jpg',
    authorName: 'Samracana Projects LLP',
    views: '5.1k',
    followers: 12
  },
  {
    thumbnail: 'https://img.staticmb.com/mbimages/project/2025/02/10/0Cych7rPbMs_0.jpg',
    authorImg: 'https://img.staticmb.com/mbimages/youtubecreators/SamracanaProjectsLLP.jpg',
    authorName: 'Samracana Projects LLP',
    views: '5.1k',
    followers: 12
  },
  {
    thumbnail: 'https://img.staticmb.com/mbimages/project/2025/02/10/0Cych7rPbMs_0.jpg',
    authorImg: 'https://img.staticmb.com/mbimages/youtubecreators/SamracanaProjectsLLP.jpg',
    authorName: 'Samracana Projects LLP',
    views: '5.1k',
    followers: 12
  },
  {
    thumbnail: 'https://img.staticmb.com/mbimages/project/2025/02/10/0Cych7rPbMs_0.jpg',
    authorImg: 'https://img.staticmb.com/mbimages/youtubecreators/SamracanaProjectsLLP.jpg',
    authorName: 'Samracana Projects LLP',
    views: '5.1k',
    followers: 12
  },
  {
    thumbnail: 'https://img.staticmb.com/mbimages/project/2025/02/10/0Cych7rPbMs_0.jpg',
    authorImg: 'https://img.staticmb.com/mbimages/youtubecreators/SamracanaProjectsLLP.jpg',
    authorName: 'Samracana Projects LLP',
    views: '5.1k',
    followers: 12
  },
  {
    thumbnail: 'https://img.staticmb.com/mbimages/project/2025/02/10/0Cych7rPbMs_0.jpg',
    authorImg: 'https://img.staticmb.com/mbimages/youtubecreators/SamracanaProjectsLLP.jpg',
    authorName: 'Samracana Projects LLP',
    views: '5.1k',
    followers: 12
  },
  // More video objects...
];
  return (
    // <div className={styles.card}>
    //   <h2 className={styles.name}>{project.projectName}</h2>
    //   <p className={styles.location}>{project.location}</p>
    //   <p className={styles.price}>{project.price}</p>
    //   <p className={styles.builder}>By {project.builder}</p>
    // </div>
    <>
    <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2024/09/11/Project-Photo-1-Samracana-Swasthi-Hyderabad-5423327_410_1440_240_0.jpg"
                    alt="Samracana Swasthi"
                    className="mghome__prjblk__imgsec__img"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/samracana-swasthi-kollur-hyderabad-pdpid-4d4235343233333237?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}Samracana Swasthi{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Kollur, Outer Ring Road, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>75 Lac{/* */} -
                      <span className="rupees">₹</span>1.19 Cr
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      2 ,3 BHK | Possession in 2026{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        1{/* */} Video
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev0"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next0"
                      />
                      <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={3}
      spaceBetween={20}
      className="swiper-container"
    >
      {videos.map((video, index) => (
        <SwiperSlide key={index}>
          <div className="mghome__videocard">
            <div className="mghome__videocard__thumbnail">
              <Image
                src={video.thumbnail}
                alt="Expert Reviews & Advice"
                title="Expert Reviews & Advice"
                width={600}
                height={400}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,..." // your placeholder
              />
              <span className="mghome__videocard__thumbnail__play" />
              <span className="mghome__videocard__thumbnail__views">
                {video.views} views
              </span>
            </div>
            <div className="mghome__videocard__author">
              <span className="mghome__videocard__author__imgcont">
                <Image
                  src={video.authorImg}
                  alt={video.authorName}
                  title={video.authorName}
                  width={50}
                  height={50}
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
              </span>
              <div className="mghome__videocard__author__txt">
                <span className="mghome__videocard__author__name">{video.authorName}</span>
                <span className="mghome__videocard__author__followers">
                  {video.followers} Followers
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        Project certificates &amp; legal approvals
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Certificates
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}7{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-ic" />
                  Download Brochure
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2020/02/20/Project-Photo-29-Elegance-Hyderabad-5058226_345_1366_240_0.jpg"
                    decoding="async"
                    alt="Modi Elegance"
                    title="Modi Elegance"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/modi-elegance-gajularamaram-hyderabad-pdpid-4d4235303538323236?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}Modi Elegance{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Gajularamaram, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>46.5 Lac{/* */} -
                      <span className="rupees">₹</span>87.3 Lac
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      2 ,3 BHK | Possession in 2026{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        3{/* */} Videos
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev1"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next1"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]" slidesToScroll="auto"
                      >
                        <div className="swiper-wrapper">
          
                          <div className="swiper-slide">
                            
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/01/20/rUqKA0sk544_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  6.8k views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/channels4_profile2.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Modi Builders
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    1.0k Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                           <div class="swiper-slide">
                                                        <div class="npsrpil__seo-search__card"><div class="npsrpil__seo-search__card--title">BHK Wise Flats in Hyderabad</div>
                                                        <ul class="npsrpil__seo-search__card__list">
                                                          <li class="npsrpil__seo-search__card__list--item"><a href="https://www.magicbricks.com/1-bhk-flats-in-hyderabad-for-sale-pppfs">1 BHK Flats for sale in Hyderabad</a></li>
                                                          <li class="npsrpil__seo-search__card__list--item"><a href="https://www.magicbricks.com/2-bhk-flats-in-hyderabad-for-sale-pppfs">2 BHK Flats for sale in Hyderabad</a></li>
                                                          <li class="npsrpil__seo-search__card__list--item"><a href="https://www.magicbricks.com/3-bhk-flats-in-hyderabad-for-sale-pppfs">3 BHK Flats for sale in Hyderabad</a></li>
                                                          <li class="npsrpil__seo-search__card__list--item"><a href="https://www.magicbricks.com/4-bhk-flats-in-hyderabad-for-sale-pppfs">4 BHK Flats for sale in Hyderabad</a></li>
                                                          <li class="npsrpil__seo-search__card__list--item"><a href="https://www.magicbricks.com/5-bhk-flats-in-hyderabad-for-sale-pppfs">5 BHK Flats for sale in Hyderabad</a></li>
                                                        </ul>
                          </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/01/20/SgWqhBAQgtk_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  6.2k views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/channels4_profile2.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Modi Builders
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    1.0k Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/01/20/R2x-31fSSls_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  4.3k views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/channels4_profile2.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Modi Builders
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    1.0k Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All Latest Reports from RERA
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View All Reports
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}14{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-irco" />
                  Book Visit
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2024/02/15/Project-Photo-1-Rajapushpa-Aurelia-Hyderabad-5419093_345_1366_240_0.jpg"
                    decoding="async"
                    alt="Rajapushpa Aurelia"
                    title="Rajapushpa Aurelia"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/rajapushpa-aurelia-tellapur-hyderabad-pdpid-4d4235343139303933?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}Rajapushpa Aurelia{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Tellapur, Outer Ring Road, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>2.30 Cr{/* */} -
                      <span className="rupees">₹</span>3.45 Cr
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      3 ,4 BHK | Possession in 2028{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        2{/* */} Videos
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev2"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next2"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2024/11/10/fcz1TsXYTYA_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  8.2k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/HyderabadNow.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Hyderabad Now
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    9.3k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2024/11/10/Ac2FQvTtY4Y_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  5.4k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/HyderabadNow.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Hyderabad Now
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    9.3k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All Latest Reports from RERA
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View All Reports
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}24{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-irco" />
                  Book Visit
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2020/12/31/Project-Photo-1-Aparna-Serenity-Hyderabad-5221217_345_1366_240_0.jpg"
                    decoding="async"
                    alt="Aparna Serenity"
                    title="Aparna Serenity"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/aparna-serenity-kompally-hyderabad-pdpid-4d4235323231323137?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}Aparna Serenity{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Kompally, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>98 Lac{/* */} -
                      <span className="rupees">₹</span>1.74 Cr
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      2 ,3 BHK | Possession in 2026{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        1{/* */} Video
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev3"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next3"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2024/03/19/5U21EaDxC1w_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  708{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/PropertyDealsTalk.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Property Deals Talk
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    2.8k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        Project certificates &amp; legal approvals
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Certificates
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}9{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-irco" />
                  Book Visit
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2023/08/25/Project-Photo-10-Aparna-Synergy-Hyderabad-5416741_345_1366_240_0.jpg"
                    decoding="async"
                    alt="Aparna Synergy"
                    title="Aparna Synergy"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/aparna-synergy-gandi-maisamma-hyderabad-pdpid-4d4235343136373431?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}Aparna Synergy{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Gandi Maisamma, Outer Ring Road, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>90 Lac{/* */} -
                      <span className="rupees">₹</span>1.70 Cr
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      2 ,3 BHK | Possession in 2027{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        1{/* */} Video
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev4"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next4"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2024/02/24/tph0wjtGGak_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  6.3k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/HyderabadNow.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Hyderabad Now
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    9.3k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        Project certificates &amp; legal approvals
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Certificates
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}20{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-irco" />
                  Book Visit
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2024/08/26/Project-Photo-21-Lansum-Elena-Hyderabad-5418739_410_1440_240_0.jpg"
                    decoding="async"
                    alt="Lansum Elena"
                    title="Lansum Elena"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/lansum-elena-kokapet-hyderabad-pdpid-4d4235343138373339?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}Lansum Elena{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Kokapet, Outer Ring Road, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>2.37 Cr{/* */} -
                      <span className="rupees">₹</span>4.35 Cr
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      3 ,4 BHK | Possession in 2028{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        4{/* */} Videos
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev5"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next5"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/02/06/2dU2uQMPJnI_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  41.4k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/HyderabadNow.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Hyderabad Now
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    9.3k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/02/06/PwmQBYrR_cI_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  7.0k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/HyderabadNow.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Hyderabad Now
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    9.3k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/02/06/jzaUp9mhy4E_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  5.7k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/HyderabadNow.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Hyderabad Now
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    9.3k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/02/06/E7OfFMryj30_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  99{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/HyderabadOpenPlotsSearch.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Hyderabad Open Plots Search
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    72{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        Bhk wise configuration
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Bhk Layouts
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}89{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-irco" />
                  Book Visit
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2022/02/18/Project-Photo-1-Ramky-One-Odyssey-Hyderabad-5325937_345_1366_240_0.jpg"
                    decoding="async"
                    alt="Ramky One Odyssey"
                    title="Ramky One Odyssey"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/ramky-one-odyssey-kokapet-hyderabad-pdpid-4d4235333235393337?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}Ramky One Odyssey{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Kokapet, Outer Ring Road, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>1.43 Cr{/* */} -
                      <span className="rupees">₹</span>3.55 Cr
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      3 ,4 BHK | Possession in 2026{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        1{/* */} Video
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev6"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next6"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2024/11/10/L7CkPdznDJQ_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  4.5k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/HyderabadNow.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Hyderabad Now
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    9.3k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        Bhk wise configuration
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Bhk Layouts
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}17{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-irco" />
                  Book Visit
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2023/08/31/Project-Photo-1-ASBL-Loft-Hyderabad-5416795_345_1366_240_0.jpg"
                    decoding="async"
                    alt="ASBL Loft"
                    title="ASBL Loft"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/asbl-loft-puppalaguda-hyderabad-pdpid-4d4235343136373935?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}ASBL Loft{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Puppalguda, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>1.69 Cr{/* */} -
                      <span className="rupees">₹</span>1.89 Cr
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      3 BHK | Possession in 2026{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        2{/* */} Videos
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev7"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next7"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/02/11/x1IMig4CBtg_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  2.8m{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/ASBLIndia.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    ASBL India
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    17.3k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/02/11/ZMHW9eNhImA_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  8.7k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/HyderabadNow.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Hyderabad Now
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    9.3k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        Bhk wise configuration
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Bhk Layouts
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}13{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-irco" />
                  Book Visit
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2022/04/22/Project-Photo-8-River-View--Hyderabad-5331177_345_1366_240_0.jpg"
                    decoding="async"
                    alt="SRR River View"
                    title="SRR River View"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/srr-river-view-narsingi-hyderabad-pdpid-4d4235333331313737?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}SRR River View{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Narsingi, Outer Ring Road, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>1.88 Cr{/* */} -
                      <span className="rupees">₹</span>1.95 Cr
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      3 ,4 BHK | Ready To Move{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        3{/* */} Videos
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev8"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next8"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/03/25/Lytx_8FUYhs_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  1.8k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/SRRRiverView.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    sriram riverview
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    140{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/03/25/C4xlEc_JdOY_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  765{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/SRRRiverView.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    sriram riverview
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    140{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/03/25/Pd0kxQ5IXIU_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  392{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/SRRRiverView.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    sriram riverview
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    140{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        Bhk wise configuration
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Bhk Layouts
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}23{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-irco" />
                  Book Visit
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2024/10/21/Project-Photo-1-Bhuvanas-Urban-Greens-Hyderabad-5369653_410_1440_240_0.jpg"
                    decoding="async"
                    alt="Bhuvanas Urban Greens"
                    title="Bhuvanas Urban Greens"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/bhuvanas-urban-greens-gowdavalli-hyderabad-pdpid-4d4235333639363533?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}Bhuvanas Urban Greens{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Gowdavalli, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>58.6 Lac{/* */} -
                      <span className="rupees">₹</span>81.1 Lac
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      2 ,3 BHK | Ready To Move{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        1{/* */} Video
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev9"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next9"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/02/12/8WI9mYf7uL4_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  858{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/bhuvanapromoterslogo.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Bhuvana Promoters
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    106{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        Project certificates &amp; legal approvals
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Certificates
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}7{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-irco" />
                  Book Visit
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2024/11/19/Project-Photo-48-KOHINOOR-PHASE-III-Hyderabad-5424177_410_1440_240_0.jpg"
                    decoding="async"
                    alt="Auro Kohinoor Phase Iii"
                    title="Auro Kohinoor Phase Iii"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/auro-kohinoor-phase-iii-hitech-city-hyderabad-pdpid-4d4235343234313737?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}Auro Kohinoor Phase Iii{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Hitech City, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>1.75 Cr{/* */} -
                      <span className="rupees">₹</span>4.26 Cr
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      2 ,3 ,4 BHK | Possession in 2027{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        1{/* */} Video
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev10"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next10"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/02/11/0b3hn4b56bM_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  3.1k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/AuroRealty.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Auro Realty
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    3.2k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        Project certificates &amp; legal approvals
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Certificates
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}12{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-irco" />
                  Book Visit
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2023/05/02/Project-Photo-1-Shangrilas-Abbham-Hyderabad-5405061_345_1366_240_0.jpg"
                    decoding="async"
                    alt="Shangrilas Abbham"
                    title="Shangrilas Abbham"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/shangrilas-abbham-kismatpur-hyderabad-pdpid-4d4235343035303631?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}Shangrilas Abbham{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Kismatpur, Outer Ring Road, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>2.90 Cr{/* */} -
                      <span className="rupees">₹</span>4.90 Cr
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      4 BHK | Possession in 2025{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        2{/* */} Videos
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev11"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next11"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/02/17/fhhIubF-4LE_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  127{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/ShangrilaInfraconPvtLtd.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Shangrila Infracon Pvt Ltd
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    2.7k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2024/03/20/fgVCfkCss10_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  76{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/MetroBricks.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Metro Bricks
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    406{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        No of units sold and available
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        Check Availability
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}10{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-irco" />
                  Book Visit
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2022/09/05/Project-Photo-14-Sumadhura-Gardens-By-The-Brook-Hyderabad-5335647_505_2000_240_0.jpg"
                    decoding="async"
                    alt="Sumadhuras Gardens By The Brook"
                    title="Sumadhuras Gardens By The Brook"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/sumadhuras-gardens-by-the-brook-shamshabad-hyderabad-pdpid-4d4235333335363437?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}Sumadhuras Gardens By The Brook{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Shamshabad, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>1.01 Cr{/* */} -
                      <span className="rupees">₹</span>1.34 Cr
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      2 ,3 BHK | Possession in 2029{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        2{/* */} Videos
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev12"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next12"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/02/12/WDdZ1XSYsgU_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  33.9k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/SUMADHURAINFRACONPVTLTD.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    SUMADHURA INFRACON PVT LTD
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    20.4k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/02/12/FTbHkKO76LM_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  940{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/SUMADHURAINFRACONPVTLTD.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    SUMADHURA INFRACON PVT LTD
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    20.4k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        Bhk wise configuration
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Bhk Layouts
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}6{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-ic" />
                  Download Brochure
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2025/04/15/Project-Photo-1-AV-Vinoothna-Homes-Hyderabad-5430385_410_1440_240_0.jpg"
                    decoding="async"
                    alt="AV Vinoothna Homes"
                    title="AV Vinoothna Homes"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/av-vinoothna-homes-pocharam-hyderabad-pdpid-4d4235343330333835?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}AV Vinoothna Homes{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Pocharam, NH 2 2, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>3.21 Cr{/* */} -
                      <span className="rupees">₹</span>3.34 Cr
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      5 BHK | Possession in 2026{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        2{/* */} Videos
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev13"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next13"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/04/16/WeuycxzdWoE_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  8.9k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/AVConstructionsPvtLtd.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    AV Constructions Pvt Ltd
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    168{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/04/16/o-B_fNS47yg_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  3.5k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/AVConstructionsPvtLtd.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    AV Constructions Pvt Ltd
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    168{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        Project certificates &amp; legal approvals
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Certificates
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}9{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-ic" />
                  Download Brochure
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2022/12/05/Project-Photo-20-ASBL-Springs------Hyderabad-5367389_345_1366_240_0.jpg"
                    decoding="async"
                    alt="ASBL Springs "
                    title="ASBL Springs "
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/asbl-springs-pocharam-hyderabad-pdpid-4d4235333637333839?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}ASBL Springs {/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Pocharam, NH 2 2, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>66.5 Lac{/* */} -
                      <span className="rupees">₹</span>82.5 Lac
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      2 ,3 BHK | Ready To Move{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        3{/* */} Videos
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev14"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next14"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2024/02/20/xAzDHOqbPQc_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  2.1k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/RealEstateChannelFlatsVillas.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Real Estate Channel, Flats, Villas
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    19.1k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2024/03/06/-e9O6IEM9OY_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  255{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/HISPACE.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    HISPACE
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    3.7k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2024/09/13/z2d2ccVt8SY_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  50{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/HyderabadProperties.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Hyderabad Properties
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    569{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        Project certificates &amp; legal approvals
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Certificates
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}8{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-ic" />
                  Download Brochure
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2021/08/20/Project-Photo-1-The-Olympus-Hyderabad-5298591_345_1366_240_0.jpg"
                    decoding="async"
                    alt="Sumadhura Infracon The Olympus"
                    title="Sumadhura Infracon The Olympus"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/sumadhura-infracon-the-olympus-nanakram-guda-hyderabad-pdpid-4d4235323938353931?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}Sumadhura Infracon The Olympus{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Nanakaramguda, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>2.34 Cr{/* */} -
                      <span className="rupees">₹</span>2.70 Cr
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      3 BHK | Possession in 2027{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        2{/* */} Videos
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev15"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next15"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/02/12/tPOvTjNpBwk_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  89.4k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/SUMADHURAINFRACONPVTLTD.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    SUMADHURA INFRACON PVT LTD
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    20.4k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2024/02/19/QPAS5JSWCU4_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  11.9k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/MBTVbyMagicbricks.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    MBTV by Magicbricks
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    290.0k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        Bhk wise configuration
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Bhk Layouts
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}16{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-ic" />
                  Download Brochure
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2024/08/29/Project-Photo-16-Akshita-Golden-Breeze-4-Hyderabad-5322353_410_1440_240_0.jpg"
                    decoding="async"
                    alt="Akshita Golden Breeze 4"
                    title="Akshita Golden Breeze 4"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/akshita-golden-breeze-4-maheshwaram-hyderabad-pdpid-4d4235333232333533?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}Akshita Golden Breeze 4{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Maheshwaram, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>22.5 Lac{/* */} -
                      <span className="rupees">₹</span>48.7 Lac
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk"> </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        1{/* */} Video
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev16"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next16"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2024/09/23/UzavZ7jHmr8_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  427{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/Regrob.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Regrob
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    4.7k{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        Project certificates &amp; legal approvals
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Certificates
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}6{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-ic" />
                  Download Brochure
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2025/03/27/Project-Photo-1-Elysia-By-Meenakshi-Hyderabad-5429663_410_1440_240_0.jpg"
                    decoding="async"
                    alt="Elysia By Meenakshi"
                    title="Elysia By Meenakshi"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/elysia-by-meenakshi-abids-hyderabad-pdpid-4d4235343239363633?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}Elysia By Meenakshi{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Abids, NH 7, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>5 Cr{/* */} -
                      <span className="rupees">₹</span>5 Cr
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      4 BHK | Possession in 2026{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        1{/* */} Video
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev17"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next17"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/03/27/GrArkBq_gHM_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  1.6k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/MeenakshiGroup.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Meenakshi Group
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    61{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All Latest Reports from RERA
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View All Reports
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}21{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-ic" />
                  Download Brochure
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2024/05/16/Project-Photo-13-Sai-Sravanthi-Pavani-Felicity-Hyderabad-5386027_410_1440_240_0.jpg"
                    decoding="async"
                    alt="Sai Sravanthi Pavani Felicity"
                    title="Sai Sravanthi Pavani Felicity"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/sai-sravanthi-pavani-felicity-nizampet-hyderabad-pdpid-4d4235333836303237?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}Sai Sravanthi Pavani Felicity{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Nizampet, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>96.7 Lac{/* */} -
                      <span className="rupees">₹</span>1.84 Cr
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      3 BHK | Possession in 2028{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        1{/* */} Video
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev18"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next18"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/02/14/03QROw_o1_U_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  2.7k{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/PavaniGroup.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Pavani Group
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    145{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        Project certificates &amp; legal approvals
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Certificates
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}12{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-ic" />
                  Download Brochure
                </span>
              </div>
            </div>
            <div className="projdis__prjcard">
              <div className="projdis__prjcard__leftcont">
                <div className="mghome__prjblk__imgsec ">
                  <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    data-src="https://img.staticmb.com/mbimages/project/Photo_h240_w0/2024/11/08/Project-Photo-11-Urban-Elite-Hyderabad-5424461_410_1440_240_0.jpg"
                    decoding="async"
                    alt="Urban Elite"
                    title="Urban Elite"
                    width="100%"
                    height="100%"
                    className="mghome__prjblk__imgsec__img customLazy"
                  />
                  <div className="mghome__prjblk__ratingtags" />
                  <span className="mghome__prjblk__share" />
                  <div className="mghome__prjblk__txtsec ">
                    <h2>
                      <a
                        href="https://www.magicbricks.com/urban-elite-kadthal-hyderabad-pdpid-4d4235343234343631?source=newhomes&section=image&position=mainsrp"
                        target="_blank"
                        className="mghome__prjblk__prjname"
                      >
                        
                        {/* */}Urban Elite{/* */}
                      </a>
                    </h2>
                    <div className="mghome__prjblk__locname">
                      Kadthal, Hyderabad
                    </div>
                    <div className="mghome__prjblk__price">
                      <span className="rupees">₹</span>27.2 Lac{/* */} -
                      <span className="rupees">₹</span>65 Lac
                      <span className="mghome__prjblk__price--sm" />
                    </div>
                    <div className="mghome__prjblk__bhk">
                      
                      Possession in 2025{/* */}
                    </div>
                  </div>
                </div>
                <div className="projdis__prjcard__midsec">
                  <div className="projdis__prjrev">
                    <div className="projdis__prjrev__txtsec">
                      <div className="projdis__prjrev__title">
                        Expert Reviews &amp; Advice
                      </div>
                      <div className="projdis__prjrev__videos">
                        1{/* */} Video
                      </div>
                    </div>
                    <div className="projdis__prjrev__vidslider">
                      <div
                        className="projdis__prjrev__vidslider__swiperprev swiper-button-prev"
                        id="rev-swiper-button-prev19"
                      />
                      <div
                        className="projdis__prjrev__vidslider__swipernext swiper-button-next"
                        id="rev-swiper-button-next19"
                      />
                      <div
                        className="swiper-container"
                        modules="[object Object]"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="mghome__videocard">
                              <div className="mghome__videocard__thumbnail">
                                <img
                                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                  data-src="https://img.staticmb.com/mbimages/project/2025/02/20/2-IJKJQISKE_0.jpg"
                                  decoding="async"
                                  alt="Expert Reviews & Advice"
                                  title="Expert Reviews & Advice"
                                  width="100%"
                                  height="100%"
                                  className="mghome__videocard__thumbnail__image customLazy"
                                />
                                <span className="mghome__videocard__thumbnail__play" />
                                <span className="mghome__videocard__thumbnail__views">
                                  45{/* */} views
                                </span>
                              </div>
                              <div className="mghome__videocard__author">
                                <span className="mghome__videocard__author__imgcont">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                                    data-src="https://img.staticmb.com/mbimages/youtubecreators/UrbanLifespaces.jpg"
                                    decoding="async"
                                    alt="Expert Reviews & Advice"
                                    title="Expert Reviews & Advice"
                                    width="100%"
                                    height="100%"
                                    className="mghome__videocard__author__img customLazy"
                                  />
                                </span>
                                <div className="mghome__videocard__author__txt">
                                  <span className="mghome__videocard__author__name">
                                    Urban Lifespaces
                                  </span>
                                  <span className="mghome__videocard__author__followers">
                                    6{/* */} Followers
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mghome__linkblks">
                    <div className="mghome__linkblks__card">
                      <span className="mghome__linkblks__card__tag">
                        RERA Reports
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        Project certificates &amp; legal approvals
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Certificates
                      </div>
                    </div>
                    <div className="mghome__linkblks__card mghome__linkblks__card--amenities">
                      <span className="mghome__linkblks__card__tag">
                        Amenities
                      </span>
                      <div className="mghome__linkblks__card__txt">
                        All {/* */}5{/* */} Amenities in the Project
                      </div>
                      <div className="mghome__linkblks__card__cta">
                        View Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projdis__prjcard__ctasec">
                <span className="projdis__prjcard__cta projdis__prjcard__cta--solid ">
                  Contact Builder
                </span>
                <span className="projdis__prjcard__cta projdis__prjcard__cta--trans  ">
                  <span className="downld-ic" />
                  Download Brochure
                </span>
              </div>
            </div>
    </>
  );
};

export default ProjectCard;
