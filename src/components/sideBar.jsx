import { useState, useEffect } from "react";
import styled from "styled-components";

import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter, GiHamburgerMenu } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings, IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";

const Section = styled.section`
    background-color: #212121;
    position: fixed;
    left: 0;
    width: 18vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 2rem 0;
  .top {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        gap: 2rem;

    .brand {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        svg {
            color: #ffc107;
            font-size: 2.5rem;
        }
        span {
            color: #ffc107;
            font-size: 2.5rem;
            font-family: cursive;
            font-weight:700;
        }
        }
        .links {
            display: flex;
            justify-content: center;
        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            list-style: none;

            li {
                padding: 0.6rem 1rem;
                border-radius: 0.6rem;
            &:hover {
                background-color: #ffc107;

                a {
                color: black;
                }
            }
            a {
                text-decoration: none;
                color: white;
                display: flex;
                gap: 1rem;
            }
            }
            .active{
                background-color: #ffc107;

                a {
                color: black;
                }        
            }
            
        }
    }
  }

  .logout{
            padding: 0.3rem 1rem;
            border-radius: 0.6rem;

            &:hover{
                background: #da0037;
            }
            a{
                text-decoration:none;
                color: white;
            }
        }
`;

export default function SideBar() {
  const [currentLink, setCurrentLink] = useState(1);
  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <FaTaxi />
            <span>MY TAXI</span>
          </div>
          <div className="toggle"></div>
          <div className="links">
            <ul>
              <li
                onClick={() => setCurrentLink(1)}
                className={currentLink === 1 ? "active" : ""}
              >
                <a href="#h">
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(2)}
                className={currentLink === 2 ? "active" : ""}
              >
                <a href="#h">
                  <RiDashboard2Fill />
                  <span> Riders</span>
                </a>
              </li>
              <li
                onClick={() => setCurrentLink(3)}
                className={currentLink === 3 ? "active" : ""}
              >
                <a href="#l">
                  <FaAddressCard />
                  <span> Payment Details</span>
                </a>
              </li>

              <li
                onClick={() => setCurrentLink(4)}
                className={currentLink === 4 ? "active" : ""}
              >
                <a href="#l">
                  <GiTwirlCenter />
                  <span> Learning Center</span>
                </a>
              </li>

              <li
                onClick={() => setCurrentLink(5)}
                className={currentLink === 5 ? "active" : ""}
              >
                <a href="#l">
                  <BsFillChatTextFill />
                  <span> FAQS</span>
                </a>
              </li>

              <li
                onClick={() => setCurrentLink(6)}
                className={currentLink === 6 ? "active" : ""}
              >
                <a href="#l">
                  <IoSettings />
                  <span> Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="logout">
          <a href="#l">
            <FiLogOut />
            <span> LogOut</span>
          </a>
        </div>
      </Section>
    </>
  );
}
