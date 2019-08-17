
import styled from 'styled-components';



export const Content = styled.div`
width: 100%;
height: 100%;
display: flex;

`
export const Ul = styled.ul`
 display: flex;
 align-items: center;
 flex-direction: column;
 width:200px;
 padding: 0;
 opacity: 0.5;
 background: #333;
 height:100%;
 `
export const Li = styled.li`
 display: flex;
 justify-content: center;
 align-items: center;
 font-size:18px;
 height:40px;
 color: ${props => props.currentIndex === props.index ? "red":"yellow"};
 `

 export const Rights = styled.div `
    flex:1;
    padding:20px;
 `