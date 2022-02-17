import React from 'react';
import Link from 'next/link';
import LayoutContent from '../components/common/Layout/LayoutContent';

function about(props) {
  return (
    <LayoutContent title="About Me" icon="caffee">
      <div className="max-w-screen-lg mx-auto md:mt-16 px-3 space-y-10 md:space-y-16">
        <div className="flex flex-col md:flex-row items-start">
          <div className="text-3xl md:text-right md:text-4xl lg:text-5xl py-2 md:py-0 font-bold sticky top-0 md:top-10 w-full md:w-1/3 md:mr-16 bg-white">
            Contact Information
          </div>

          <div className="md:w-2/3">
            <div className="space-y-2">
              <div className="flex items-center text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
                <p>24/09/2001</p>
              </div>
              <div className="flex items-center text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p>0385168797</p>
              </div>
              <div className="flex items-center text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p>ba.trandong01@gmail.com</p>
              </div>
              <div className="flex items-center text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>Tan Phu District, Ho Chi Minh City.</p>
              </div>
              <div className="flex items-center text-base">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" fill="black" />
                </svg>
                <Link href="/">
                  <a>TRANDONGXYZ (github.com)</a>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col md:flex-row items-start">
          <div className="text-3xl md:text-right md:text-4xl lg:text-5xl py-2 md:py-0 font-bold sticky top-0 md:top-10 w-full md:w-1/3 md:mr-16 bg-white">
            Education
          </div>

          <div className="md:w-2/3">
            <p>09/2019 – Present</p>
            <p className="text-2xl md:text-3xl font-medium">University of Science HCMC.</p>
            <div className="space-y-2">
              <div className="text-base flex items-center mt-2">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.9789 22.4727C18.5017 22.4727 22.9789 17.9955 22.9789 12.4727C22.9789 6.94981 18.5017 2.47266 12.9789 2.47266C7.45603 2.47266 2.97888 6.94981 2.97888 12.4727C2.97888 17.9955 7.45603 22.4727 12.9789 22.4727Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.2189 8.23267L15.0989 14.5927L8.73889 16.7127L10.8589 10.3527L17.2189 8.23267Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                AI Reseacher
              </div>
              <div className="text-base flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                3.0 / 4.0
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col md:flex-row items-start">
          <div className="text-3xl md:text-right md:text-4xl lg:text-5xl py-2 md:py-0 font-bold sticky top-0 md:top-10 w-full md:w-1/3 md:mr-16 bg-white">
            Skill
          </div>

          <div className="md:w-2/3 space-y-6">
            <div>
              <p className="text-2xl md:text-3xl font-medium">Algorithm.</p>
              <div className="space-y-2">
                <div className="text-base flex items-center mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Good foundation.
                </div>
              </div>
            </div>

            <div>
              <p className="text-2xl md:text-3xl font-medium">Programming Languages.</p>
              <div className="space-y-2">
                <div className="text-base flex items-center mt-2">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 256 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M255.569 84.72C255.567 79.89 254.534 75.622 252.445 71.959C250.393 68.357 247.32 65.338 243.198 62.951C209.173 43.332 175.115 23.773 141.101 4.13395C131.931 -1.16005 123.04 -0.967046 113.938 4.40295C100.395 12.39 32.59 51.237 12.385 62.94C4.064 67.757 0.015 75.129 0.013 84.711C0 124.166 0.013 163.62 0 203.076C0.002 207.8 0.991 211.985 2.988 215.593C5.041 219.304 8.157 222.406 12.374 224.847C32.58 236.55 100.394 275.394 113.934 283.383C123.04 288.756 131.931 288.948 141.104 283.652C175.119 264.012 209.179 244.454 243.209 224.835C247.426 222.395 250.542 219.291 252.595 215.583C254.589 211.975 255.58 207.79 255.582 203.065C255.582 203.065 255.582 124.176 255.569 84.72" fill="#5C8DBC" />
                    <path d="M128.182 143.509L2.98804 215.593C5.04104 219.304 8.15704 222.406 12.374 224.847C32.58 236.55 100.394 275.394 113.934 283.383C123.04 288.756 131.931 288.948 141.104 283.652C175.119 264.012 209.179 244.454 243.209 224.835C247.426 222.395 250.542 219.291 252.595 215.583L128.182 143.509" fill="#1A4674" />
                    <path d="M91.101 164.861C98.386 177.579 112.081 186.157 127.791 186.157C143.598 186.157 157.371 177.47 164.619 164.616L128.182 143.509L91.101 164.861" fill="#1A4674" />
                    <path d="M255.569 84.72C255.567 79.89 254.534 75.622 252.445 71.959L128.182 143.509L252.595 215.583C254.589 211.975 255.58 207.79 255.582 203.065C255.582 203.065 255.582 124.176 255.569 84.72" fill="#1B598E" />
                    <path d="M248.728 148.661H239.006V158.385H229.282V148.661H219.561V138.94H229.282V129.218H239.006V138.94H248.728V148.661Z" fill="white" />
                    <path d="M213.253 148.661H203.532V158.385H193.81V148.661H184.088V138.94H193.81V129.218H203.532V138.94H213.253V148.661Z" fill="white" />
                    <path d="M164.619 164.616C157.371 177.47 143.598 186.157 127.791 186.157C112.081 186.157 98.386 177.579 91.101 164.861C87.4414 158.479 85.5194 151.25 85.527 143.893C85.527 120.552 104.45 101.63 127.791 101.63C143.4 101.63 157.023 110.101 164.344 122.689L201.285 101.417C186.602 76.071 159.189 59.019 127.791 59.019C80.915 59.019 42.916 97.0191 42.916 143.893C42.916 159.271 47.007 173.692 54.157 186.131C68.803 211.611 96.294 228.768 127.791 228.768C159.346 228.768 186.88 211.542 201.505 185.987L164.619 164.616Z" fill="white" />
                  </svg>
                  C++
                </div>

                <div className="text-base flex items-center mt-2">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.885 2.09989C8.785 2.09989 9.234 5.16989 9.234 5.16989V8.35989H15.986V9.35989H6.545C6.545 9.35989 2 8.79989 2 16.0049C2 23.2099 6.013 22.9169 6.013 22.9169H8.33V19.5559C8.33 19.5559 8.2 15.5429 12.23 15.5429H18.992C18.992 15.5429 22.764 15.6029 22.764 11.8909V5.79989C22.764 5.79989 23.336 2.08789 15.922 2.08789L15.885 2.09989ZM12.153 4.23689C12.393 4.23083 12.6295 4.2961 12.8324 4.42443C13.0354 4.55275 13.1957 4.73838 13.2932 4.95784C13.3906 5.17729 13.4208 5.42072 13.3799 5.65732C13.339 5.89393 13.2288 6.11309 13.0633 6.28709C12.8979 6.46109 12.6845 6.58212 12.4503 6.63486C12.216 6.6876 11.9714 6.66969 11.7473 6.58339C11.5232 6.4971 11.3298 6.34629 11.1914 6.15004C11.0531 5.9538 10.976 5.72093 10.97 5.48089V5.46089C10.97 5.13892 11.0979 4.83013 11.3256 4.60246C11.5532 4.37479 11.862 4.24689 12.184 4.24689L12.153 4.23689Z" fill="url(#paint0_linear)" />
                    <path d="M16.085 29.9101C23.185 29.9101 22.736 26.8301 22.736 26.8301V23.6501H15.985V22.6501H25.455C25.455 22.6501 30 23.1581 30 15.9951C30 8.83211 25.987 9.08311 25.987 9.08311H23.64V12.4001C23.64 12.4001 23.77 16.4131 19.74 16.4131H12.975C12.975 16.4131 9.20004 16.3561 9.20004 20.0681V26.2001C9.20004 26.2001 8.62804 29.9121 16.042 29.9121H16.082L16.085 29.9101ZM19.817 27.7631C19.577 27.7692 19.3406 27.7039 19.1376 27.5756C18.9347 27.4472 18.7743 27.2616 18.6769 27.0422C18.5794 26.8227 18.5493 26.5793 18.5902 26.3427C18.6311 26.1061 18.7412 25.8869 18.9067 25.7129C19.0722 25.5389 19.2855 25.4179 19.5198 25.3651C19.754 25.3124 19.9987 25.3303 20.2227 25.4166C20.4468 25.5029 20.6402 25.6537 20.7786 25.85C20.917 26.0462 20.994 26.2791 21 26.5191V26.5491C21 26.8711 20.8721 27.1799 20.6445 27.4075C20.4168 27.6352 20.108 27.7631 19.786 27.7631H19.816H19.817Z" fill="url(#paint1_linear)" />
                    <defs>
                      <linearGradient id="paint0_linear" x1="4.76716" y1="4.82279" x2="18.0538" y2="18.0794" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#387EB8" />
                        <stop offset="1" stopColor="#366994" />
                      </linearGradient>
                      <linearGradient id="paint1_linear" x1="12.6275" y1="13.4587" x2="27.8077" y2="26.7113" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFE052" />
                        <stop offset="1" stopColor="#FFC331" />
                      </linearGradient>
                    </defs>
                  </svg>
                  Python
                </div>
              </div>
            </div>

            <div>
              <p className="text-2xl md:text-3xl font-medium">Softwares.</p>
              <div className="space-y-2">
                <div className="text-base flex items-center mt-2">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                      <path fillRule="evenodd" clipRule="evenodd" d="M70.9119 99.3171C72.4869 99.9307 74.2828 99.8914 75.8725 99.1264L96.4608 89.2197C98.6242 88.1787 100 85.9892 100 83.5872V16.4133C100 14.0113 98.6243 11.8218 96.4609 10.7808L75.8725 0.873756C73.7862 -0.130129 71.3446 0.11576 69.5135 1.44695C69.252 1.63711 69.0028 1.84943 68.769 2.08341L29.3551 38.0415L12.1872 25.0096C10.589 23.7965 8.35363 23.8959 6.86933 25.2461L1.36303 30.2549C-0.452552 31.9064 -0.454633 34.7627 1.35853 36.417L16.2471 50.0001L1.35853 63.5832C-0.454633 65.2374 -0.452552 68.0938 1.36303 69.7453L6.86933 74.7541C8.35363 76.1043 10.589 76.2037 12.1872 74.9905L29.3551 61.9587L68.769 97.9167C69.3925 98.5406 70.1246 99.0104 70.9119 99.3171ZM75.0152 27.2989L45.1091 50.0001L75.0152 72.7012V27.2989Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0)">
                      <path d="M96.4614 10.7962L75.8569 0.875542C73.4719 -0.272773 70.6217 0.211611 68.75 2.08333L1.29858 63.5832C-0.515693 65.2373 -0.513607 68.0937 1.30308 69.7452L6.81272 74.754C8.29793 76.1042 10.5347 76.2036 12.1338 74.9905L93.3609 13.3699C96.086 11.3026 100 13.2462 100 16.6667V16.4275C100 14.0265 98.6246 11.8378 96.4614 10.7962Z" fill="#0065A9" />
                      <g filter="url(#filter0_d)">
                        <path d="M96.4614 89.2038L75.8569 99.1245C73.4719 100.273 70.6217 99.7884 68.75 97.9167L1.29858 36.4169C-0.515693 34.7627 -0.513607 31.9063 1.30308 30.2548L6.81272 25.246C8.29793 23.8958 10.5347 23.7964 12.1338 25.0095L93.3609 86.6301C96.086 88.6974 100 86.7538 100 83.3334V83.5726C100 85.9735 98.6246 88.1622 96.4614 89.2038Z" fill="#007ACC" />
                      </g>
                      <g filter="url(#filter1_d)">
                        <path d="M75.8578 99.1263C73.4721 100.274 70.6219 99.7885 68.75 97.9166C71.0564 100.223 75 98.5895 75 95.3278V4.67213C75 1.41039 71.0564 -0.223106 68.75 2.08329C70.6219 0.211402 73.4721 -0.273666 75.8578 0.873633L96.4587 10.7807C98.6234 11.8217 100 14.0112 100 16.4132V83.5871C100 85.9891 98.6234 88.1786 96.4586 89.2196L75.8578 99.1263Z" fill="#1F9CF0" />
                      </g>
                      <g opacity="0.25">
                        <path fillRule="evenodd" clipRule="evenodd" d="M70.8511 99.3171C72.4261 99.9306 74.2221 99.8913 75.8117 99.1264L96.4 89.2197C98.5634 88.1787 99.9392 85.9892 99.9392 83.5871V16.4133C99.9392 14.0112 98.5635 11.8217 96.4001 10.7807L75.8117 0.873695C73.7255 -0.13019 71.2838 0.115699 69.4527 1.44688C69.1912 1.63705 68.942 1.84937 68.7082 2.08335L29.2943 38.0414L12.1264 25.0096C10.5283 23.7964 8.29285 23.8959 6.80855 25.246L1.30225 30.2548C-0.513334 31.9064 -0.515415 34.7627 1.29775 36.4169L16.1863 50L1.29775 63.5832C-0.515415 65.2374 -0.513334 68.0937 1.30225 69.7452L6.80855 74.754C8.29285 76.1042 10.5283 76.2036 12.1264 74.9905L29.2943 61.9586L68.7082 97.9167C69.3317 98.5405 70.0638 99.0104 70.8511 99.3171ZM74.9544 27.2989L45.0483 50L74.9544 72.7012V27.2989Z" fill="url(#paint0_linear)" />
                      </g>
                    </g>
                    <defs>
                      <filter id="filter0_d" x="-8.39411" y="15.8291" width="116.727" height="92.2456" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4.16667" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                      </filter>
                      <filter id="filter1_d" x="60.4167" y="-8.07558" width="47.9167" height="116.151" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4.16667" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                      </filter>
                      <linearGradient id="paint0_linear" x1="49.9392" y1="0.257812" x2="49.9392" y2="99.7423" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  Visual Studio Code
                </div>

                <div className="text-base flex items-center mt-2">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" fill="black" />
                  </svg>
                  Github
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col md:flex-row items-start">
          <div className="text-3xl md:text-right md:text-4xl lg:text-5xl py-2 md:py-0 font-bold sticky top-0 md:top-10 w-full md:w-1/3 md:mr-16 bg-white">
            Certifications
          </div>

          <div className="md:w-2/3 space-y-6">
            <div>
              <p>2015</p>
              <p className="text-2xl md:text-2xl font-medium">🏅 Won the title of excellent student at district level in Chemistry.</p>
            </div>

            <div>
              <p>2018</p>
              <p className="text-2xl md:text-2xl font-medium">🥇 Won gold model in Mathematics 30/04 Olympic.</p>
            </div>

            <div>
              <p>2018</p>
              <p className="text-2xl md:text-2xl font-medium">🧮 Participated in Mathematics Casio contest.</p>
            </div>

            <div>
              <p>2020</p>
              <p className="text-2xl md:text-2xl font-medium">🎫 Participated in Competitive Programming Level 1 course at Big O Coding.</p>
            </div>

            <div>
              <p>2020</p>
              <p className="text-2xl md:text-2xl font-medium">🎫 Participated in Competitive Programming Level 2 course at Big O Coding.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start">
          <div className="text-3xl md:text-right md:text-4xl lg:text-5xl py-2 md:py-0 font-bold sticky top-0 md:top-10 w-full md:w-1/3 md:mr-16 bg-white">
            Activities
          </div>

          <div className="md:w-2/3 space-y-6">
            <div>
              <p>2016</p>
              <p className="text-2xl md:text-2xl font-medium">🤖 Participated in Robotic club at US Consulate HCMC.</p>
            </div>
            <div>
              <p>03/2021</p>
              <p className="text-2xl md:text-2xl font-medium">📚 Participated in Thach Thuc 2021.</p>
            </div>
            <div>
              <p>07/2021</p>
              <p className="text-2xl md:text-2xl font-medium">🚀 Participated in SAB</p>
            </div>
            <div>
              <p>07/2021</p>
              <p className="text-2xl md:text-2xl font-medium">💻 Participated in Mua He Xanh</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start">
          <div className="text-3xl md:text-right md:text-4xl lg:text-5xl py-2 md:py-0 font-bold sticky top-0 md:top-10 w-full md:w-1/3 md:mr-16 bg-white">
            Language Proficiency
          </div>

          <div className="md:w-2/3">
            <p className="text-2xl md:text-3xl font-medium">English.</p>
            <div className="space-y-2">
              <div className="text-base flex items-center mt-2">
                📖 Basic.
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutContent>
  );
}

export default about;