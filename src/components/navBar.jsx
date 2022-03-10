import styled from "styled-components";
import {BiSearch} from "react-icons/bi";
import React from "react";

export default function NavBar (){

    return(
        <Nav>
            <div className="title">
                <h4>Hi! Adeolaking,</h4>
                <h1>Welcome to <span>MY TAXI Dashboard</span></h1>
            </div>
            <div className="search">
                <BiSearch/>
                <input type={'search'} placeholder={'Search'}/>
            </div>
        </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: white;
    .title{
        h1{
            span{
                color: #ffc107;
                margin-left: .5rem;
                letter-spacing:0.6rem;
                font-family:cursive;
            }

        }
    }
    .search{
        background-color: #212121;
        display:flex;
        align-items: center;
        gap: 1rem;
        border-radius: 1rem;
        padding: 1rem 8rem 1rem 1rem;
        svg{
            color:#ffc107;
        }
        input{
            background-color:transparent;
            border: none;
            color: #ffc107;
            font-family: cursive;
            letter-spacing:0.3rem;

            &::placeholder{
                color:#FFC107;
            }
        }
    }
        

`