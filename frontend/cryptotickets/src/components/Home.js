import React from 'react';
import {Link} from 'react-router-dom';
import Web3 from 'web3';


const Home = ()=>{

    return (
        <div className="home_container_main">
            <div className="home_banner">
                    <Link to="/Create">
                        <button className="form_button_submit">
                            Get Started
                        </button>
                    </Link>
             </div>
             <div className="home_info_container">
                <div className="action_item">
                    <div className="action_item_thumbnail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="154.851" height="84.714" viewBox="0 0 154.851 84.714">
                          <g id="layer1" transform="translate(-21.612 -71.842)">
                            <g id="g4135" transform="translate(99.827 132.984)">
                              <path id="path4111" d="M-18.545,9.576.495,22.646" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4113" d="M-18.545,9.576-18.864-8.78" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4117" d="M.495,22.646.176,4.29" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4119" d="M.495,22.646,18.864,8.78" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4121" d="M-18.864-8.78.176,4.29" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4123" d="M-18.864-8.78-.495-22.646" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4125" d="M.176,4.29,18.545-9.576" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4131" d="M18.864,8.78,18.545-9.576" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4133" d="M-.495-22.646,18.545-9.576" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                            </g>
                            <g id="g4226" transform="translate(41.403 95.414)">
                              <path id="path4202" d="M-18.545,9.576.495,22.646" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4204" d="M-18.545,9.576-18.864-8.78" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4208" d="M.495,22.646.176,4.29" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4210" d="M.495,22.646,18.864,8.78" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4212" d="M-18.864-8.78.176,4.29" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4214" d="M-18.864-8.78-.495-22.646" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4216" d="M.176,4.29,18.545-9.576" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4222" d="M18.864,8.78,18.545-9.576" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4224" d="M-.495-22.646,18.545-9.576" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                            </g>
                            <g id="g4226-7" transform="translate(156.673 97.368)">
                              <path id="path4202-7" d="M-18.545,9.576.495,22.646" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4204-1" d="M-18.545,9.576-18.864-8.78" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4208-8" d="M.495,22.646.176,4.29" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4210-1" d="M.495,22.646,18.864,8.78" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4212-2" d="M-18.864-8.78.176,4.29" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4214-7" d="M-18.864-8.78-.495-22.646" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4216-1" d="M.176,4.29,18.545-9.576" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4222-4" d="M18.864,8.78,18.545-9.576" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                              <path id="path4224-7" d="M-.495-22.646,18.545-9.576" fill="none" stroke="#fffaff" stroke-linecap="round" stroke-width="1.323"/>
                            </g>
                            <g id="g8811" transform="matrix(0.999, 0.044, -0.044, 0.999, 14.333, 0.951)">
                              <rect id="rect6712-6" width="4.529" height="1.937" rx="0.969" transform="matrix(-0.742, -0.671, 0.671, -0.742, 70.647, 121.663)" fill="none" stroke="#fffaff" stroke-linejoin="round" stroke-width="2.298"/>
                              <rect id="rect6712-6-7-3" width="4.529" height="1.937" rx="0.969" transform="matrix(-0.742, -0.671, 0.671, -0.742, 53.369, 106.136)" fill="none" stroke="#fffaff" stroke-linejoin="round" stroke-width="2.298"/>
                              <rect id="rect6712-6-17" width="4.529" height="1.937" rx="0.969" transform="matrix(-0.742, -0.671, 0.671, -0.742, 62.32, 114.281)" fill="none" stroke="#fffaff" stroke-linejoin="round" stroke-width="2.298"/>
                              <rect id="rect6712-6-1" width="7.769" height="4.382" rx="2.191" transform="matrix(-0.742, -0.671, 0.671, -0.742, 66.844, 119.926)" fill="none" stroke="#fffaff" stroke-linejoin="round" stroke-width="2.298"/>
                              <rect id="rect6712-6-1-3" width="7.769" height="4.382" rx="2.191" transform="matrix(-0.742, -0.671, 0.671, -0.742, 58.428, 112.598)" fill="none" stroke="#fffaff" stroke-linejoin="round" stroke-width="2.298"/>
                            </g>
                            <g id="g8802" transform="translate(17.589 6.354)">
                              <rect id="rect6712-6-7-5-6" width="4.529" height="1.937" rx="0.969" transform="matrix(0.79, -0.614, 0.614, 0.79, 116.008, 103.196)" fill="none" stroke="#fffaff" stroke-linejoin="round" stroke-width="2.298"/>
                              <g id="g7585" transform="matrix(0.868, -0.496, 0.496, 0.868, -58.443, 63.328)">
                                <g id="g7774" transform="translate(-16.026 17.302) rotate(-7.122)">
                                  <rect id="rect6712-6-17-8" width="4.529" height="1.937" rx="0.969" transform="translate(121.445 121.871)" fill="none" stroke="#fffaff" stroke-linejoin="round" stroke-width="2.298"/>
                                  <rect id="rect6712-6-1-5" width="7.769" height="4.382" rx="2.191" transform="translate(114.303 120.718)" fill="none" stroke="#fffaff" stroke-linejoin="round" stroke-width="2.298"/>
                                  <rect id="rect6712-6-1-3-5" width="7.769" height="4.382" rx="2.191" transform="translate(125.46 120.509)" fill="none" stroke="#fffaff" stroke-linejoin="round" stroke-width="2.298"/>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                    </div>
                    <p>
                        Safely stored in the blockchain
                    </p>
                </div>
                <div className="action_item">
                    <div className="action_item_thumbnail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="107.19" height="89.211" viewBox="0 0 107.19 89.211">
                          <g id="layer1" transform="translate(-20.702 -69.176)">
                            <circle id="path10672" cx="8.807" cy="8.807" r="8.807" transform="translate(24.899 139.889)" fill="#fff" stroke="#fffaff" stroke-linejoin="bevel" stroke-width="1.767"/>
                            <circle id="path10672-5" cx="11.36" cy="11.36" r="11.36" transform="translate(104.032 79.495)" fill="#fff" stroke="#fffaff" stroke-linejoin="bevel" stroke-width="2.279"/>
                            <circle id="path10672-4" cx="5.453" cy="5.453" r="5.453" transform="translate(29.47 96.15)" fill="#fff" stroke="#fff" stroke-linejoin="bevel" stroke-width="1.094"/>
                            <circle id="path10672-4-26" cx="5.453" cy="5.453" r="5.453" transform="translate(102.477 132.883)" fill="#fff" stroke="#fffaff" stroke-linejoin="bevel" stroke-width="1.094"/>
                            <circle id="path10672-4-2" cx="5.453" cy="5.453" r="5.453" transform="translate(89.81 69.723)" fill="#fff" stroke="#fff" stroke-linejoin="bevel" stroke-width="1.094"/>
                            <circle id="path10672-4-8" cx="6.816" cy="6.816" r="6.816" transform="translate(21.386 77.798)" fill="#fff" stroke="#fffaff" stroke-linejoin="bevel" stroke-width="1.367"/>
                            <g id="g12077">
                              <circle id="path10672-6" cx="16.537" cy="16.537" r="16.537" transform="translate(58.989 98.793)" fill="none" stroke="#fff" stroke-linejoin="bevel" stroke-width="3.318"/>
                              <circle id="path11993" cx="6.384" cy="6.384" r="6.384" transform="translate(69.116 109.031)" fill="none" stroke="#fff" stroke-linejoin="bevel" stroke-width="2.231"/>
                            </g>
                            <path id="path12147" d="M32.063,151.127,62.174,125.8" fill="none" stroke="#fff" stroke-width="2"/>
                            <path id="path12147-2" d="M29.394,84.831,59.91,109.669" fill="#fff" stroke="#fff" stroke-width="2"/>
                            <path id="path12147-2-9" d="M93.912,77.717,81.958,101.983" fill="none" stroke="rgba(251,255,255,0)" stroke-width="2"/>
                            <path id="path12147-2-9-4" d="M107.015,96,90.005,108.5" fill="none" stroke="#fffffd" stroke-width="2"/>
                            <path id="path12147-2-9-4-2" d="M105.355,135.906,89.5,121.977" fill="none" stroke="#fbfbff" stroke-width="2"/>
                            <path id="path12147-2-9-4-2-9" d="M79.664,99.375,93.729,77.837" fill="none" stroke="#fff" stroke-width="2.438"/>
                            <path id="path12147-5" d="M36.109,101.424l22.169,9.78" fill="none" stroke="#fffdff" stroke-width="1.232"/>
                          </g>
                        </svg>

                    </div>
                    <p>
                        No entry fees, no agent commissions, no middlemen
                    </p>
                </div>
                <div className="action_item">
                    <div className="action_item_thumbnail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="102.297" height="102.233" viewBox="0 0 102.297 102.233">
                          <g id="g19966" transform="translate(-10.001 -10.303)">
                            <g id="g19964" transform="translate(10.001 10.303)">
                              <path id="path19960" d="M54.57-500.453a50.707,50.707,0,0,0-29.562,14.732,49.4,49.4,0,0,0-14.959,33.91,50.718,50.718,0,0,0,9.962,32.839A54.9,54.9,0,0,0,25.2-413.2,50.477,50.477,0,0,0,51.26-399.178c2.824.617,4.316.714,9.962.714s7.139-.1,9.961-.714a53.5,53.5,0,0,0,21.741-9.995l1.363-1.1,1.2.811c1.331.908,3.8,1.1,6,.454,4.121-1.266,6.328-6.588,5.517-13.434l-.357-3.018,1.1-2.434a60.858,60.858,0,0,0,3.829-11.682c.616-2.824.714-4.315.714-9.962s-.1-7.139-.714-9.962a50.706,50.706,0,0,0-14.148-26.25,50.082,50.082,0,0,0-26.089-14.084A72.69,72.69,0,0,0,54.57-500.453ZM65.7-497.24A47.046,47.046,0,0,1,95-483.319c14.895,14.927,18.366,36.668,8.827,55.684a55.982,55.982,0,0,1-6.522,9.573l-1.622,1.785-.26-1.622a59.1,59.1,0,0,1,.129-7.3c.325-5.029.486-5.874,1.2-7.3a39.157,39.157,0,0,0,1.688-4.315c.908-2.921.746-3.635-.779-3.635-.682,0-.746-.1-.584-1.071.908-5.322,1.071-16.29.292-19.7-.552-2.531-1.882-4.575-3.31-5.224-.779-.357-1.071-.779-1.557-2.368a15.54,15.54,0,0,0-11.422-10.449,15.726,15.726,0,0,0-17.945,9.54,17.406,17.406,0,0,0-.325,10.06,15.557,15.557,0,0,0,22.163,9.281,16.757,16.757,0,0,0,7.982-10.675l.292-1.622.617,1.3c.552,1.136.617,2.076.585,7.464,0,5.354-.779,14.959-1.266,15.706-.325.552-3.992,1.46-5.841,1.428-3.472-.032-5.743-1.622-8.827-6.1-3.894-5.646-10.578-6.977-16.063-3.18l-1.233.841-1.2-.843a9.654,9.654,0,0,0-6.588-1.98,8.165,8.165,0,0,0-4.543.811,10.925,10.925,0,0,0-5.063,4.413c-2.531,3.829-4.8,5.581-7.756,6.036-2.044.325-5.451-.584-8.47-2.207-2.985-1.59-3.407-1.72-4.024-.974-.357.422-.26,1.071.617,3.667,3.115,9.443,9.118,14.018,19.016,14.57,6.555.325,12.948-2.174,16.906-6.652l1.006-1.136,2.076,2.011a23.111,23.111,0,0,0,10.189,5.386c5.711,1.2,12.688,0,17-2.888l1.59-1.071.162,5.549c.1,3.05.26,5.906.389,6.36.194.746-.065,1.039-2.467,2.824a47.562,47.562,0,0,1-49.29,5.1A49.046,49.046,0,0,1,17.934-429.1,47.693,47.693,0,0,1,22.9-478.257a55.147,55.147,0,0,1,13.174-12.1A61.372,61.372,0,0,1,46.392-495.1,46.986,46.986,0,0,1,65.7-497.24Zm16.518,21.806a12.656,12.656,0,0,1,6.328,6.036c1.006,2.012,1.071,2.4,1.071,5.42,0,2.953-.1,3.407-.974,5.127a14.021,14.021,0,0,1-6.554,6.1,11.726,11.726,0,0,1-4.543.714,8.033,8.033,0,0,1-5.062-1.168,12.015,12.015,0,0,1-3.441-19.439A12.2,12.2,0,0,1,82.218-475.434Zm21.189,59.221c-.584,2.725-2.368,4.315-4.8,4.315-1.882,0-1.785-.617.616-3.212a47.106,47.106,0,0,0,3.31-3.959l1.039-1.525.1,1.33A11.347,11.347,0,0,1,103.407-416.213Z" transform="translate(-10.001 500.697)" fill="rgba(255,255,255,0.99)"/>
                              <path id="path19962" d="M271.57-214.7c-3.353,1.006-7.781,5.77-8.787,9.458-3.153,11.134,8.049,21.33,18.581,16.9a14.088,14.088,0,0,0,4.428-23.209C282.035-215.1,276.87-216.172,271.57-214.7Zm8.385,7.447a7.64,7.64,0,0,1,2.615,3.086c2.281,4.829-1.141,9.861-6.642,9.861-5.1,0-8.452-6.709-5.433-11C272.645-208.324,276.2-209.062,279.955-207.249Z" transform="translate(-240.183 240.258)" fill="rgba(255,255,255,0.99)"/>
                            </g>
                          </g>
                        </svg>
                    </div>
                    <p>
                        Be your own boss
                    </p>
                </div>
             </div>
         </div>
    )
}

export default Home;