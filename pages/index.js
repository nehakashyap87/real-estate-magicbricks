import React, { useEffect } from'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProjectCard from '../components/ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
export default function Home() {
   const links = [
    { href: "https://www.magicbricks.com/residential-projects-in-hyderabad-nprid", text: "Residential Projects in Hyderabad" },
    { href: "https://www.magicbricks.com/new-projects-gachibowli-hotspot-in-hyderabad", text: "New projects in Gachibowli" },
    { href: "https://www.magicbricks.com/new-projects-bachupally-hotspot-in-hyderabad", text: "New projects in Bachupally" },
    { href: "https://www.magicbricks.com/new-projects-kompally-and-surrondings-hotspot-in-hyderabad", text: "New projects in Kompally and Surrondings" },
    { href: "https://www.magicbricks.com/new-projects-tellapur-hotspot-in-hyderabad", text: "New projects in Tellapur" },
    { href: "https://www.magicbricks.com/new-projects-rest-of-hyderabad-hotspot-in-hyderabad", text: "New projects in Rest of Hyderabad" },
    { href: "https://www.magicbricks.com/new-projects-Kondapur-in-Hyderabad", text: "New Projects in Kondapur" },
    { href: "https://www.magicbricks.com/new-projects-Miyapur-in-Hyderabad", text: "New Projects in Miyapur" },
    { href: "https://www.magicbricks.com/new-projects-Kukatpally-in-Hyderabad", text: "New Projects in Kukatpally" },
    { href: "https://www.magicbricks.com/new-projects-Manikonda-Jagir-in-Hyderabad", text: "New Projects in Manikonda Jagir" },
  ];
  useEffect(() => {
    
		function loadGAJS() {
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','MB_GTM_dataLayer','GTM-N7Q8HKZ');
		}
	
		var notification = {};
		var jsRootUrl = "https://cdn.staticmb.com/prjstatic/4222025110637/";
		
		notification['service-worker'] = '';
		notification['track-notification'] = '';

	    function loadJS(file) {
	        var jsElm = document.createElement("script");
	        jsElm.type = "application/javascript";
	        jsElm.src = file;
	        document.body.appendChild(jsElm);
	    }
	   
	    function srpload(file) { 
	    	loadGAJS();
	        loadJS("https://cdn.staticmb.com/prjstatic/4222025110637/client/newProjects/web/newprojects.js");
	    }
		var _gaq = [];

		(function(c,l,a,r,i,t,y){
			c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
			t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
			y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
		})(window, document, "clarity", "script", "l2j0lh5wh9");    
  }, []);
  return (
  <>
  <div onload="srpload();">
  <div>
    <div id="newprojects">
      <div data-testid="header-component" className="mb-header">
        <div data-testid="header-theme" className="mb-header__main">
          <div className="mb-header__container mb-header__main__section pos-rel">
            <div className="mb-header__main__section__left">
              <div className="mb-header__main__logo">
                <a
                  data-testid="header-logo-link"
                  href="https://www.magicbricks.com?reqFrom=OA"
                  className="mb-header__main__logo__link -logo"
                >
                  
                </a>
              </div>
            </div>
            <div className="mb-header__main__section__right">
              <div className="mb-header__main__postproperty">
                <a href="https://post.magicbricks.com/" target="_blank">
                  Post Property{/* */} <span className="badge">Free</span>
                </a>
              </div>
              <div className="mb-header__main__login">
                <a className="mb-header__main__link " href="#">
                  Login
                </a>
                <div className="mb-header__main__dropdown mb-login  reverse-direction">
                  <div className="mb-login__box">
                    <div className="mb-login__divider">
                      <span className="mb-login__divider__label">
                        My Activity
                      </span>
                    </div>
                    <ul className="mb-login__drop-links">
                      <li>
                        <a
                          href="https://www.magicbricks.com/primedashboard/buyer-dashboard"
                          target="_blank"
                        >
                          Requested Properties{/* */}
                          <span className="badge">New</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.magicbricks.com/odashboard/dashboard"
                          target="_blank"
                        >
                          View Response
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.magicbricks.com/odashboard/dashboard"
                          target="_blank"
                        >
                          Manage Properties
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.magicbricks.com/mbprojectdetail/magicdiary"
                          target="_self"
                        >
                          MagicDiary
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.magicbricks.com/bricks/manageRequirements.html#loaded"
                          target="_blank"
                        >
                          Manage Alerts
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.magicbricks.com/bricks/iprospectLanding.html"
                          target="_blank"
                        >
                          iAdvantage
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-login__box signup-box">
                    <a
                      href="https://accounts.magicbricks.com/userauth/login"
                      target="_blank"
                      className="mb-login__drop-cta"
                    >
                      Login
                    </a>
                    <div className="mb-login__drop-text-2">
                      New to Magicbricks?{/* */}
                      <a
                        href="https://www.magicbricks.com/bricks/User-Registration1"
                        target="_blank"
                        className="signup-link"
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-header__sub active">
          <div className="mb-header__container flex-box">
            <ul className="mb-header__sub__tabs">
              <li className="">
                <span className="mb-header__sub__tabs__link" href="#!">
                  Buy
                </span>
                <div className="mb-header__sub__tabs__dropdown  buy-drop-all">
                  <div className="drop-row">
                    <div className="drop-call undefined">
                      <div className="drop-heading">Popular Choices</div>
                      <ul className="drop-links">
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/ready-to-move-flats-in-hyderabad-pppfs"
                            target="_blank"
                            className=""
                          >
                            Ready to Move
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/low-budget-flats-for-sale-in-hyderabad-pppfs"
                            target="_blank"
                            className=""
                          >
                            Budget Homes
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/new-projects-hyderabad"
                            target="_blank"
                            className=""
                          >
                            New Projects <span className="badge">NEW</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="drop-call undefined">
                      <div className="drop-heading">Property Types</div>
                      <ul className="drop-links">
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/flats-in-hyderabad-for-sale-pppfs"
                            target="_blank"
                            className=""
                          >
                            Flats in Hyderabad
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/independent-house-for-sale-in-hyderabad-pppfs"
                            target="_blank"
                            className=""
                          >
                            House for sale in Hyderabad
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/villa-for-sale-in-hyderabad-pppfs"
                            target="_blank"
                            className=""
                          >
                            Villa in Hyderabad
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/property-for-sale-in-hyderabad-pppfs"
                            target="_blank"
                            className=""
                          >
                            Property in Hyderabad
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/agricultural-land-for-sale-in-hyderabad-pppfs"
                            target="_blank"
                            className=""
                          >
                            Agriculture Land for Sale in Hyderabad
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/shops-for-sale-in-hyderabad-pppfs"
                            target="_blank"
                            className=""
                          >
                            Shop for sale in Hyderabad
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="drop-call undefined">
                      <div className="drop-heading">Budget</div>
                      <ul className="drop-links" />
                    </div>
                    <div className="drop-call undefined">
                      <div className="drop-heading">Explore</div>
                      <ul className="drop-links">
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/localities-in-hyderabad"
                            target="_blank"
                            className=""
                          >
                            Localities in Hyderabad
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/new-projects/hyderabad-Residential-projects"
                            target="_blank"
                            className=""
                          >
                            Projects in Hyderabad
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/hbf/hyderabad/"
                            target="_blank"
                            className=""
                          >
                            Investment Hotspot
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/Real-estate-property-top-agents/agent-in-hyderabad?&proptype=Multistorey-Apartment,Builder-Floor-Apartment,Penthouse,Studio-Apartment,Residential-House,Villa&cityName=hyderabad&mbTrackSrc=tabChange&page=1&category=S"
                            target="_blank"
                            className=""
                          >
                            Find an Agent
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="drop-call undefined">
                      <div className="drop-heading">Buying Tools</div>
                      <ul className="drop-links">
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/propworth/hyderabad/"
                            target="_blank"
                            className=""
                          >
                            PropWorth
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/advice/trends/hyderabad"
                            target="_blank"
                            className=""
                          >
                            Rates &amp; Trends
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/advice/buy-rent-calculator-financial-advice"
                            target="_blank"
                            className=""
                          >
                            Buy vs Rent
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/advice/"
                            target="_blank"
                            className=""
                          >
                            Tips and Guides
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="">
                <span className="mb-header__sub__tabs__link" href="#!">
                  Rent
                </span>
                <div className="mb-header__sub__tabs__dropdown  undefined">
                  <div className="drop-row">
                    <div className="drop-call undefined">
                      <div className="drop-heading">Popular Choices</div>
                      <ul className="drop-links">
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/furnished-flats-for-rent-in-hyderabad-pppfr"
                            target="_blank"
                            className=""
                          >
                            Furnished Homes
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="drop-call undefined">
                      <div className="drop-heading">Property Types</div>
                      <ul className="drop-links">
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/flats-for-rent-in-hyderabad-pppfr"
                            target="_blank"
                            className=""
                          >
                            Flat for rent in Hyderabad
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/independent-house-for-rent-in-hyderabad-pppfr"
                            target="_blank"
                            className=""
                          >
                            House for rent in Hyderabad
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/villa-for-rent-in-hyderabad-pppfr"
                            target="_blank"
                            className=""
                          >
                            Villa for rent in Hyderabad
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/pg-in-hyderabad-pppfr"
                            target="_blank"
                            className=""
                          >
                            PG in Hyderabad
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/office-space-for-rent-in-hyderabad-pppfr"
                            target="_blank"
                            className=""
                          >
                            Office Space in Hyderabad
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/hostels-in-hyderabad-pppfr"
                            target="_blank"
                            className=""
                          >
                            Hostels in Hyderabad
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/single-room-for-rent-in-hyderabad-pppfr"
                            target="_blank"
                            className=""
                          >
                            Room for Rent in Hyderabad
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="drop-call undefined">
                      <div className="drop-heading">Budget</div>
                      <ul className="drop-links" />
                    </div>
                    <div className="drop-call undefined">
                      <div className="drop-heading">Explore</div>
                      <ul className="drop-links">
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/property-requirement-to-buy-rent/residential-commercial"
                            target="_blank"
                            className=""
                          >
                            Share Requirement
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/property-services/"
                            target="_blank"
                            className=""
                          >
                            Property Services
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/rentalagreement/index.html"
                            target="_blank"
                            className=""
                          >
                            Rent Agreement
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="">
                <span className="mb-header__sub__tabs__link" href="#!">
                  Sell
                </span>
                <div className="mb-header__sub__tabs__dropdown  undefined">
                  <div className="drop-row">
                    <div className="drop-call undefined">
                      <div className="drop-heading">For Owner</div>
                      <ul className="drop-links" />
                      <div className="drop-label-text">
                        <span>+91 9870 260 930</span> /
                        <a
                          href="https://www.magicbricks.com/contactUs"
                          target="_blank"
                          className="email-link"
                        >
                          <span>Email Us</span>
                        </a>
                      </div>
                    </div>
                    <div className="drop-call undefined">
                      <div className="drop-heading">
                        For Agent &amp; Builder
                      </div>
                      <ul className="drop-links" />
                      <div className="drop-label-text">
                        <span>0120-5135525</span>
                      </div>
                    </div>
                    <div className="drop-call undefined">
                      <div className="drop-heading">Selling Tools</div>
                      <ul className="drop-links" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="">
                <span className="mb-header__sub__tabs__link" href="#!">
                  Home Loans
                </span>
                <div className="mb-header__sub__tabs__dropdown  home-loan-drop">
                  <div className="drop-row">
                    <div className="drop-call undefined">
                      <div className="drop-heading">Useful Links</div>
                      <ul className="drop-links">
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/homeloan/home"
                            target="_blank"
                            className=""
                          >
                            Home Loan
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/homeloan/emi-calculator"
                            target="_blank"
                            className=""
                          >
                            Home Loan EMI Calculator
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/homeloan/eligibility-calculator"
                            target="_blank"
                            className=""
                          >
                            Home Loan Eligibility Calculator
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/homeloan/interest-rate"
                            target="_blank"
                            className=""
                          >
                            Home Loan Interest Rate
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="">
                <span className="mb-header__sub__tabs__link" href="#!">
                  Home Interiors
                </span>
                <div className="mb-header__sub__tabs__dropdown  home-interior-drop-all">
                  <div className="drop-row">
                    <div className="drop-call undefined">
                      <div className="drop-heading">Explore our services</div>
                      <ul className="drop-links">
                        <li className="ids-explore">
                          <a
                            href="https://www.magicbricks.com/home-interior/?inc=topnavigation"
                            target="_blank"
                            className="ids-explore"
                          >
                            Home Interior Design Services
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/home-interior/interior-designers-in-hyderabad?inc=topnavigation"
                            target="_blank"
                            className=""
                          >
                            Interior Designers in Hyderabad
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/home-interior/requirments?nav=gfc&inc=topnavigation"
                            target="_blank"
                            className=""
                          >
                            Design Consultation
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/home-interior/requirments?nav=fh&inc=topnavigation"
                            target="_blank"
                            className=""
                          >
                            Full Home Interior Cost Calculator
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="https://www.magicbricks.com/home-interior/requirments?nav=knw&inc=topnavigation"
                            target="_blank"
                            className=""
                          >
                            Kitchen/Wardrobe Calculator
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="">
                <span className="mb-header__sub__tabs__link" href="#!">
                  MB Advice <span className="badge"> NEW</span>
                </span>
                <div className="mb-header__sub__tabs__dropdown  advice-drop">
                  <div className="drop-row">
                    <div className="drop-call undefined">
                      <div className="drop-heading">MB Research</div>
                      <ul className="drop-links" />
                    </div>
                    <div className="drop-call width-180px">
                      <div className="drop-heading">Services &amp; Tools</div>
                      <ul className="drop-links" />
                    </div>
                    <div className="drop-call undefined">
                      <div className="drop-heading">
                        Localities &amp; Projects
                      </div>
                      <ul className="drop-links" />
                    </div>
                    <div className="drop-call undefined">
                      <div className="drop-heading">Blog</div>
                      <ul className="drop-links" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="">
                <span className="mb-header__sub__tabs__link" href="#!">
                  Help
                </span>
                <div className="mb-header__sub__tabs__dropdown  undefined">
                  <div className="drop-row">
                    <div className="drop-call undefined">
                      <div className="drop-heading">Help/Support</div>
                      <ul className="drop-links" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="projdis projdis-seo">
        <div className="projdis__banner">
          <div className="projdis__breadcrumbs">
            <ul className="projdis__breadcrumbs__list">
              <li className="projdis__breadcrumbs__list__item">
                <a
                  className="projdis__breadcrumbs__list__item__link"
                  href="https://www.magicbricks.com/"
                >
                  Home
                </a>
              </li>
              <li className="projdis__breadcrumbs__list__item">
                <span className="projdis__breadcrumbs__list__item__link">
                  New Projects in Hyderabad
                </span>
              </li>
            </ul>
          </div>
          <div className="projdis__banner__title" />
          <div className="projdis__banner__txt">
            Encyclopedia For All New Projects
          </div>
          <div className="projdis__banner__citycont">
            in <span >{"Hyderabad"}</span>
          </div>
          
        </div>
        <div className="projdis__contentsec with-banner">
        
          <div className="projdis__newprjs notSimilar">
            <div className="projdis__newprjs__title">
              <div className="projdis__newprjs__title__txt">
                All {/* */}2319
                <h1>
                  New Projects{/* */} in {/* */}Hyderabad{/* */}
                </h1>
              </div>
            </div>
          </div>
          <div id="filterwrap" className="projdis__newprjs__filterswrap ">
            <div className="projdis__newprjs__filterWrap-inner">
              <div className="mghome__newprojs__autosugg">
                <div data-testid="auto-suggest-cont" className="auto-suggest">
                  <div
                    data-testid="auto-suggest-wrap-view"
                    className="auto-suggest__tag-wrap forFlexView"
                  >
                    <input
                      className="auto-suggest__input mghome__newprojs__input"
                      placeholder="Search Project"
                      data-testid="auto-suggest-input"  fdprocessedid="jpum7x"
                    />
                  </div>
                  <div
                    data-testid="auto-suggest-results"
                    className="auto-suggest__drop-wrap"
                  />
                </div>
              </div>
              <div className="mghome__filters">
                <div className="mghome__filters__block mghome__filters__block--filter">
                  Filters
                </div>
                <div className="mghome__filters__block budget  ">Budget</div>
            
              </div>
            </div>
          </div>
          <div className="projdis__newprjs">
            <ProjectCard />
          </div>
        </div>
        <div id="mbsrpPagination" />
        <div className="nsr-seo-wrap">
          <div className="projdis__newprjs">
            <div className="seolinks__wrap">
              <div className="seolinks">
                <h3 className="seolinks__heading">
                  Projects in 's Popular Area
                </h3>
        <ul class="seolinks__list">
          <li class="seolinks__list__item">
            <a href="https://www.magicbricks.com/residential-projects-in-hyderabad-nprid" class="seolinks__list__item__link">Residential Projects in Hyderabad</a></li>
            <li class="seolinks__list__item"><a href="https://www.magicbricks.com/new-projects-gachibowli-hotspot-in-hyderabad" class="seolinks__list__item__link">New projects in Gachibowli</a></li>
            <li class="seolinks__list__item"><a href="https://www.magicbricks.com/new-projects-bachupally-hotspot-in-hyderabad" class="seolinks__list__item__link">New projects in Bachupally</a></li>
            <li class="seolinks__list__item"><a href="https://www.magicbricks.com/new-projects-kompally-and-surrondings-hotspot-in-hyderabad" class="seolinks__list__item__link">New projects in Kompally and Surrondings</a></li>
            <li class="seolinks__list__item"><a href="https://www.magicbricks.com/new-projects-tellapur-hotspot-in-hyderabad" class="seolinks__list__item__link">New projects in Tellapur</a></li>
            <li class="seolinks__list__item"><a href="https://www.magicbricks.com/new-projects-rest-of-hyderabad-hotspot-in-hyderabad" class="seolinks__list__item__link">New projects in Rest of Hyderabad</a></li>
            <li class="seolinks__list__item"><a href="https://www.magicbricks.com/new-projects-Kondapur-in-Hyderabad" class="seolinks__list__item__link">New Projects in Kondapur</a></li>
            <li class="seolinks__list__item"><a href="https://www.magicbricks.com/new-projects-Miyapur-in-Hyderabad" class="seolinks__list__item__link">New Projects in Miyapur</a></li>
            <li class="seolinks__list__item"><a href="https://www.magicbricks.com/new-projects-Kukatpally-in-Hyderabad" class="seolinks__list__item__link">New Projects in Kukatpally</a></li>
            <li class="seolinks__list__item"><a href="https://www.magicbricks.com/new-projects-Manikonda-Jagir-in-Hyderabad" class="seolinks__list__item__link">New Projects in Manikonda Jagir</a></li></ul>
                {/* <div className="seolinks__list">
                   <Swiper
                      spaceBetween={20}
                      slidesPerView={2}
                      breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                      }}
                    >
                      {links.map((link, index) => (
                        <SwiperSlide key={index}>
                          <li className="seolinks__list__item">
                            <a href={link.href} className="seolinks__list__item__link">
                              {link.text}
                            </a>
                          </li>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                </div> */}
              </div>
            </div>
          </div>
          <div className="npsrpil">
            <div className="npsrpil__wrap">
              <section className="npsrpil__section has-swiper">
                <div className="npsrpil__seo-search">
                  <div className="npsrpil__seo-search__slider npsrpil__swiper-arrow">
                    <div
                      className="swiper-button-prev"
                      id="seo-search-swiper-prev"
                    />
                    <div
                      className="swiper-button-next"
                      id="seo-search-swiper-next"
                    />
                    <div className="npsrpil__seo-search--swiper ">
                      <div
                        className="swiper-container"
                        modules="[object Object],[object Object]"
                        slidestoscroll="auto"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="npsrpil__seo-search__card">
                              <div className="npsrpil__seo-search__card--title">
                                BHK Wise Flats in Hyderabad
                              </div>
                              <ul className="npsrpil__seo-search__card__list">
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/1-bhk-flats-in-hyderabad-for-sale-pppfs">
                                    1 BHK Flats for sale in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/2-bhk-flats-in-hyderabad-for-sale-pppfs">
                                    2 BHK Flats for sale in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/3-bhk-flats-in-hyderabad-for-sale-pppfs">
                                    3 BHK Flats for sale in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/4-bhk-flats-in-hyderabad-for-sale-pppfs">
                                    4 BHK Flats for sale in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/5-bhk-flats-in-hyderabad-for-sale-pppfs">
                                    5 BHK Flats for sale in Hyderabad
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="npsrpil__seo-search__card">
                              <div className="npsrpil__seo-search__card--title">
                                Top Localities in Hyderabad
                              </div>
                              <ul className="npsrpil__seo-search__card__list">
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-kondapur-hyderabad-for-sale-pppfs">
                                    Flats in Kondapur
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-gachibowli-hyderabad-for-sale-pppfs">
                                    Flats in Gachibowli
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-miyapur-hyderabad-for-sale-pppfs">
                                    Flats in Miyapur
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-kompally-hyderabad-for-sale-pppfs">
                                    Flats in Kompally
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-kukatpally-hyderabad-for-sale-pppfs">
                                    Flats in Kukatpally
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-kokapet-hyderabad-for-sale-pppfs">
                                    Flats in Kokapet
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-tellapur-hyderabad-for-sale-pppfs">
                                    Flats in Tellapur
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-bachupally-hyderabad-for-sale-pppfs">
                                    Flats in Bachupally
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-narsingi-hyderabad-for-sale-pppfs">
                                    Flats in Narsingi
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="npsrpil__seo-search__card">
                              <div className="npsrpil__seo-search__card--title">
                                Top Properties in Hyderabad
                              </div>
                              <ul className="npsrpil__seo-search__card__list">
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/independent-house-for-sale-in-hyderabad-pppfs">
                                    House for sale in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/builder-floor-for-sale-in-hyderabad-pppfs">
                                    Builder Floor in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/resale-flats-in-hyderabad-pppfs">
                                    Resale Flats in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/residential-plots-land-for-sale-in-hyderabad-pppfs">
                                    Plots for sale in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/villa-for-sale-in-hyderabad-pppfs">
                                    Villas for sale in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/property-for-sale-in-hyderabad-pppfs">
                                    Property in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/low-budget-flats-for-sale-in-hyderabad-pppfs">
                                    Low Budget Flats in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/ready-to-move-flats-in-hyderabad-pppfs">
                                    Ready To Move Flats in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/penthouse-for-sale-in-hyderabad-pppfs">
                                    Penthouse in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/agricultural-land-for-sale-in-hyderabad-pppfs">
                                    Agriculture Land for sale in Hyderabad
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="npsrpil__seo-search__card">
                              <div className="npsrpil__seo-search__card--title">
                                Popular Projects in Hyderabad
                              </div>
                              <ul className="npsrpil__seo-search__card__list">
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/rajapushpa-provincia-narsingi-hyderabad-pdpid-4d4235323536343139">
                                    Rajapushpa Provincia
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/auro-the-regent-kondapur-hyderabad-pdpid-4d4235333236383935">
                                    Auro The Regent
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/vasavi-atlantis-narsingi-hyderabad-pdpid-4d4235333233333131">
                                    Vasavi Atlantis
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/the-prestige-city-rajendra-nagar-hyderabad-pdpid-4d4235343138323731">
                                    The Prestige City
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/candeur-crescent-serilingampally-hyderabad-pdpid-4d4235333332353339">
                                    Candeur Crescent
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/my-home-tridasa-tellapur-hyderabad-pdpid-4d4235333331343439">
                                    My Home Tridasa
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/casagrand-evon-kompally-hyderabad-pdpid-4d4235343239303037">
                                    Casagrand Evon
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/prestige-clairemont-kokapet-hyderabad-pdpid-4d4235343139313033">
                                    Prestige Clairemont
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/prestige-beverly-hills-kokapet-hyderabad-pdpid-4d4235333332333537">
                                    Prestige Beverly Hills
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/aparna-sarovar-zicon-nallagandla-hyderabad-pdpid-4d4235323530393533">
                                    Aparna Sarovar Zicon
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="npsrpil__seo-search__card">
                              <div className="npsrpil__seo-search__card--title">
                                New Projects in Hyderabad
                              </div>
                              <ul className="npsrpil__seo-search__card__list">
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/akshita-golden-breeze-4-maheshwaram-hyderabad-pdpid-4d4235333232333533">
                                    Akshita Golden Breeze 4
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/urban-elite-kadthal-hyderabad-pdpid-4d4235343234343631">
                                    Urban Elite
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/srias-life-spaces-iwa-nanakram-guda-hyderabad-pdpid-4d4235343137393231">
                                    Srias Life Spaces iWA
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/subishis-polam-luxury-apartments-kompally-hyderabad-pdpid-4d4235343232383931">
                                    Subishis Polam Luxury Apartments
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/samracana-swasthi-kollur-hyderabad-pdpid-4d4235343233333237">
                                    Samracana Swasthi
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/modi-elegance-gajularamaram-hyderabad-pdpid-4d4235303538323236">
                                    Modi Elegance
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/rajapushpa-aurelia-tellapur-hyderabad-pdpid-4d4235343139303933">
                                    Rajapushpa Aurelia
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/shanta-sriram-the-bodhivriksha-appa-junction-hyderabad-pdpid-4d4235333137333237">
                                    Shanta Sriram The Bodhivriksha
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/giridhari-24-carat-gandipet-hyderabad-pdpid-4d4235343239393237">
                                    Giridhari 24 Carat
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/av-vinoothna-homes-pocharam-hyderabad-pdpid-4d4235343330333835">
                                    AV Vinoothna Homes
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="npsrpil__seo-search__card">
                              <div className="npsrpil__seo-search__card--title">
                                Luxury Property in Hyderabad
                              </div>
                              <ul className="npsrpil__seo-search__card__list">
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/luxury-apartments-in-hyderabad-pppfs">
                                    Luxury Apartments in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/luxury-houses-in-hyderabad-for-sale-pppfs">
                                    Luxury Houses in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/luxury-villas-in-hyderabad-for-sale-pppfs">
                                    Luxury Villas in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/luxury-bungalows-in-hyderabad-for-sale-pppfs">
                                    Luxury Bungalows in Hyderabad
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="npsrpil__seo-search__card">
                              <div className="npsrpil__seo-search__card--title">
                                Flats in Hyderabad in Lakhs
                              </div>
                              <ul className="npsrpil__seo-search__card__list">
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-hyderabad-for-sale-price-5-lakhs-to-10-lakhs-pppfs">
                                    Flats in Hyderabad under 10 Lakhs
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-hyderabad-for-sale-price-5-lakhs-to-15-lakhs-pppfs">
                                    Flats in Hyderabad under 15 Lakhs
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-hyderabad-for-sale-price-10-lakhs-to-20-lakhs-pppfs">
                                    Flats in Hyderabad under 20 Lakhs
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-hyderabad-for-sale-price-15-lakhs-to-25-lakhs-pppfs">
                                    Flats in Hyderabad under 25 Lakhs
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-hyderabad-for-sale-price-20-lakhs-to-30-lakhs-pppfs">
                                    Flats in Hyderabad under 30 Lakhs
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-hyderabad-for-sale-price-25-lakhs-to-35-lakhs-pppfs">
                                    Flats in Hyderabad under 35 Lakhs
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-hyderabad-for-sale-price-30-lakhs-to-40-lakhs-pppfs">
                                    Flats in Hyderabad under 40 Lakhs
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-hyderabad-for-sale-price-40-lakhs-to-50-lakhs-pppfs">
                                    Flats in Hyderabad under 50 Lakhs
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-hyderabad-for-sale-price-50-lakhs-to-60-lakhs-pppfs">
                                    Flats in Hyderabad under 60 Lakhs
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-hyderabad-for-sale-price-60-lakhs-to-70-lakhs-pppfs">
                                    Flats in Hyderabad under 70 Lakhs
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="npsrpil__seo-search__card">
                              <div className="npsrpil__seo-search__card--title">
                                Flats in Hyderabad in Crore
                              </div>
                              <ul className="npsrpil__seo-search__card__list">
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-hyderabad-under-1-crore-pppfs">
                                    Flats in Hyderabad under 1 Cr
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-hyderabad-under-1.5-crore-pppfs">
                                    Flats in Hyderabad under 1.50 Cr
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-hyderabad-under-2-crore-pppfs">
                                    Flats in Hyderabad under 2 Cr
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-hyderabad-under-3-crore-pppfs">
                                    Flats in Hyderabad under 3 Cr
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-hyderabad-under-4-crore-pppfs">
                                    Flats in Hyderabad under 4 Cr
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-hyderabad-under-5-crore-pppfs">
                                    Flats in Hyderabad under 5 Cr
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="npsrpil__seo-search__card">
                              <div className="npsrpil__seo-search__card--title">
                                Flats Near Me
                              </div>
                              <ul className="npsrpil__seo-search__card__list">
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/1-bhk-flats-for-sale-near-me">
                                    1 BHK Flats for sale near me
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/2-bhk-flats-for-sale-near-me">
                                    2 BHK Flats for sale near me
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/3-bhk-flats-for-sale-near-me">
                                    3 BHK Flats for sale near me
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/4-bhk-flats-for-sale-near-me">
                                    4 BHK Flats for sale near me
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/5-bhk-flats-for-sale-near-me">
                                    5 BHK Flats for sale near me
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-for-sale-near-me">
                                    Flats for sale near me
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/ready-to-move-flats-near-me">
                                    Ready To Move Flats for sale near me
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/resale-flats-near-me">
                                    Resale Flats for sale near me
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="npsrpil__seo-search__card">
                              <div className="npsrpil__seo-search__card--title">
                                Properties in Nearby Cities
                              </div>
                              <ul className="npsrpil__seo-search__card__list">
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-visakhapatnam-for-sale-pppfs">
                                    Flats for sale in Visakhapatnam
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-vijayawada-for-sale-pppfs">
                                    Flats for sale in Vijayawada
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-guntur-for-sale-pppfs">
                                    Flats for sale in Guntur
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-tirupati-for-sale-pppfs">
                                    Flats for sale in Tirupati
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-rajahmundry-for-sale-pppfs">
                                    Flats for sale in Rajahmundry
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-vizianagaram-for-sale-pppfs">
                                    Flats for sale in Vizianagaram
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-nellore-for-sale-pppfs">
                                    Flats for sale in Nellore
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-kakinada-for-sale-pppfs">
                                    Flats for sale in Kakinada
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-kurnool-for-sale-pppfs">
                                    Flats for sale in Kurnool
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-in-srikakulam-for-sale-pppfs">
                                    Flats for sale in Srikakulam
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="npsrpil__seo-search__card">
                              <div className="npsrpil__seo-search__card--title">
                                Flat in Hyderabad Zones
                              </div>
                              <ul className="npsrpil__seo-search__card__list">
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-for-sale-in-hyderabad-central-pppfs">
                                    Flat for sale in Central Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-for-sale-in-hyderabad-west-pppfs">
                                    Flat for sale in West Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-for-sale-in-hyderabad-north-pppfs">
                                    Flat for sale in North Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-for-sale-in-hyderabad-south-pppfs">
                                    Flat for sale in South Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-for-sale-in-hyderabad-east-pppfs">
                                    Flat for sale in East Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-for-sale-in-hyderabad-yadadri-bhuvanagiri-pppfs">
                                    Flat for sale in Yadadri Bhuvanagiri
                                    Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-for-sale-in-hyderabad-medak-district-pppfs">
                                    Flat for sale in Medak District Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-for-sale-in-hyderabad-rangareddy-district-pppfs">
                                    Flat for sale in Rangareddy District
                                    Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-for-sale-in-hyderabad-secunderabad-city-pppfs">
                                    Flat for sale in Secunderabad City Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-for-sale-in-hyderabad-medchal-malkajgiri-pppfs">
                                    Flat for sale in Medchal Malkajgiri
                                    Hyderabad
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="npsrpil__seo-search__card">
                              <div className="npsrpil__seo-search__card--title">
                                Renting Options in Hyderabad
                              </div>
                              <ul className="npsrpil__seo-search__card__list">
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/flats-for-rent-in-hyderabad-pppfr">
                                    Flats for rent in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/independent-house-for-rent-in-hyderabad-pppfr">
                                    House for rent in Hyderabad
                                  </a>
                                </li>
                                <li className="npsrpil__seo-search__card__list--item">
                                  <a href="https://www.magicbricks.com/single-room-for-rent-in-hyderabad-pppfr">
                                    Single Room for rent in Hyderabad
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="npsrpil__seo-search__viewmore">
                      <span className="npsrpil__seo-search__viewmore--link">
                        View More
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="pageLoader" id="pageLoader" style={{ display: "none" }}>
        <div className="pageLoader__animation">
          <span>
            <img
              src="https://cdn.staticmb.com/images/mbLoader.gif"
              decoding="async"
              width={45}
              height={45}
              alt="Loader"
            />
            {/* */}Loading...
          </span>
        </div>
      </div>
      <footer data-testid="footer-component" className="mb-footer">
        <section className="mb-footer__main">
          <div className="mb-footer__container mb-footer__main__section">
            <div
              data-testid="footer-left-section"
              className="mb-footer__main__left"
            >
              <div
                data-testid="footer-title"
                className="mb-footer__main__title"
              >
                About Magicbricks
              </div>
              <div
                data-testid="footer-main-content"
                className="mb-footer__main__content"
              >
                As the largest platform connecting property buyers and sellers,
                Magicbricks boasts over 2 crore monthly visitors and 15 lakh
                active property listings. With over 17 years of experience,
                Magicbricks has evolved into a comprehensive service provider,
                offering home loans, interiors and expert advice.
                <br />
                <br />
                Magicbricks also offers extensive research-based knowledge and
                insight-driven platforms like MBTV, India's leading online real
                estate YouTube channel, along with proprietary tools providing
                home buyers with price trends, forecasts and locality reviews.
              </div>
              <ul className="mb-footer__main__social-links">
                <li data-testid="google-social">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.timesgroup.magicbricks&referrer=utm_source=MobileAppBanner"
                    className="google-play"
                    target="_blank"
                  />
                </li>
                <li data-testid="apple-social">
                  <a
                    href="https://itunes.apple.com/us/app/magicbricks/id486328406?ls=1&mt=8&referrer=utm_source=MobileAppBanner"
                    className="apple-store"
                    target="_blank"
                  />
                </li>
                <li data-testid="facebook-social">
                  <a
                    href="https://www.facebook.com/magicbricks"
                    target="_blank"
                    title="Facebook"
                    rel="nofollow"
                    className="facebook"
                  />
                </li>
                <li data-testid="twitter-social">
                  <a
                    href="https://twitter.com/magicbricks"
                    target="_blank"
                    title="Twitter"
                    rel="nofollow"
                    className="twitter"
                  />
                </li>
                <li data-testid="linkedin-social">
                  <a
                    href="https://in.linkedin.com/company/magicbricks"
                    target="_blank"
                    title="Linkedin"
                    rel="nofollow"
                    className="linkedin"
                  />
                </li>
                <li data-testid="youtube-social">
                  <a
                    href="https://www.youtube.com/user/magicbricksvideo"
                    target="_blank"
                    title="youtube MBTV"
                    rel="nofollow"
                    className="youtube"
                  />
                </li>
                <li data-testid="youtube-social">
                  <a
                    href="https://www.instagram.com/magicbricks_official/"
                    target="_blank"
                    title="Instagram"
                    rel="nofollow"
                    className="instagram"
                  />
                </li>
              </ul>
            </div>
            <div
              data-testid="footer-right-section"
              className="mb-footer__main__right"
            >
              <div className="mb-footer__main__title">Properties in India</div>
              <div className="mb-footer__main__right__content-1">
                <ul>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/property-for-sale-in-new-delhi-pppfs"
                      target="_blank"
                      className=""
                    >
                      Property in New Delhi
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/property-for-sale-in-mumbai-pppfs"
                      target="_blank"
                      className=""
                    >
                      Property in Mumbai
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/property-for-sale-in-chennai-pppfs"
                      target="_blank"
                      className=""
                    >
                      Property in Chennai
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/property-for-sale-in-pune-pppfs"
                      target="_blank"
                      className=""
                    >
                      Property in Pune
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/property-for-sale-in-noida-pppfs"
                      target="_blank"
                      className=""
                    >
                      Property in Noida
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/property-for-sale-in-gurgaon-pppfs"
                      target="_blank"
                      className=""
                    >
                      Property in Gurgaon
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/property-for-sale-in-bangalore-pppfs"
                      target="_blank"
                      className=""
                    >
                      Property in Bangalore
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/property-for-sale-in-ahmedabad-pppfs"
                      target="_blank"
                      className=""
                    >
                      Property in Ahmedabad
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-footer__main__title">
                New Projects in India
              </div>
              <div className="mb-footer__main__right__content-1">
                <ul>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/new-projects-New-Delhi"
                      target="_blank"
                      className=""
                    >
                      New Projects in New Delhi
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/new-projects-Mumbai"
                      target="_blank"
                      className=""
                    >
                      New Projects in Mumbai
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/new-projects-Chennai"
                      target="_blank"
                      className=""
                    >
                      New Projects in Chennai
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/new-projects-Pune"
                      target="_blank"
                      className=""
                    >
                      New Projects in Pune
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/new-projects-Noida"
                      target="_blank"
                      className=""
                    >
                      New Projects in Noida
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/new-projects-Gurgaon"
                      target="_blank"
                      className=""
                    >
                      New Projects in Gurgaon
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/new-projects-Bangalore"
                      target="_blank"
                      className=""
                    >
                      New Projects in Bangalore
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/new-projects-Ahmedabad"
                      target="_blank"
                      className=""
                    >
                      New Projects in Ahmedabad
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/magichomes"
                      target="_blank"
                      className=""
                    >
                      MagicHomes
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-footer__main__title">Property Services</div>
              <div className="">
                <ul>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/homeloan/home"
                      target="_blank"
                      className=""
                    >
                      Home Loan
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.magicbricks.com/home-interior/"
                      target="_blank"
                      className=""
                    >
                      Home Interior
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-footer__secondary">
          <div className="mb-footer__container">
            <ul className="mb-footer__secondary__links">
              <li className="">
                <a
                  href="https://www.magicbricks.com/sitemap.html"
                  target="_blank"
                  className=""
                >
                  Sitemap
                </a>
              </li>
              <li className="">
                <a
                  href="https://property.magicbricks.com/terms/terms.html"
                  target="_blank"
                  className=""
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="">
                <a
                  href="https://property.magicbricks.com/terms/privacy-policy.html"
                  target="_blank"
                  className=""
                >
                  Privacy Policy
                </a>
              </li>
              <li className="">
                <a
                  href="https://property.magicbricks.com/terms/whistle-blower-policy.html"
                  target="_blank"
                  className=""
                >
                  Whistle Blower Policy
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.magicbricks.com/blog/"
                  target="_blank"
                  className=""
                >
                  Blog
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.magicbricks.com/careers"
                  target="_blank"
                  className=""
                >
                  Careers
                </a>
              </li>
              <li className="">
                <a
                  href="https://property.magicbricks.com/testimonials/testimonials.htm"
                  target="_blank"
                  className=""
                >
                  Testimonials
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.magicbricks.com/mbutility/unSubEmail"
                  target="_blank"
                  className=""
                >
                  Unsubscribe
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.magicbricks.com/help/"
                  target="_blank"
                  className=""
                >
                  Help Center
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.magicbricks.com/contactUs"
                  target="_blank"
                  className=""
                >
                  Sales Enquiry
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.magicbricks.com/advertise-with-us"
                  target="_blank"
                  className=""
                >
                  Buy Our Services
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="mb-footer__disclaimer">
          <div
            data-testid="footer-disclaimer-section"
            className="mb-footer__container"
          >
            Disclaimer: Magicbricks Realty Services Limited is only an
            intermediary offering its platform to advertise properties of Seller
            for a Customer/Buyer/User coming on its Website and is not and
            cannot be a party to or privy to or control in any manner any
            transactions between the Seller and the Customer/Buyer/User. All the
            offers and discounts on this Website have been extended by{/* */}
            <span
              data-testid="footer-read-more"
              className="mb-footer__disclaimer__more"
            >
              
              {/* */}Read more{/* */}
            </span>
            <span data-testid="footer-is-more" style={{ display: "none" }}>
              various Builder(s)/Developer(s) who have advertised their
              products. Magicbricks is only communicating the offers and not
              selling or rendering any of those products or services. It neither
              warrants nor is it making any representations with respect to
              offer(s) made on the site. Magicbricks Realty Services Limited
              shall neither be responsible nor liable to mediate or resolve any
              disputes or disagreements between the Customer/Buyer/User and the
              Seller and both Seller and Customer/Buyer/User shall settle all
              such disputes without involving Magicbricks Realty Services
              Limited in any manner.
            </span>
          </div>
        </section>
        <section className="mb-footer__copyright">
          <div
            data-testid="footer-copyright-section"
            className="mb-footer__container"
          >
            All trademarks, logos and names are properties of their respective
            owners. All Rights Reserved. © Copyright{/* */} {/* */}2025{/* */}
            {/* */}Magicbricks Realty Services Limited.
          </div>
        </section>
      </footer>
    </div>
  </div>
  <div id="newprojects" />
</div>
  </>

  )
}
