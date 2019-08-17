
import styled from 'styled-components';

export const Ul = styled.ul`
 display: flex;
 justify-content: center;
 align-items: center;
 height:46px;
 `
export const Li = styled.li`
 flex:1;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size:18px;
 color: ${props => props.currentIndex === props.index ? "red":"yellow"};
 `