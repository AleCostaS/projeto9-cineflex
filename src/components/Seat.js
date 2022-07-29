import styled from 'styled-components';

export default function Seat({ able, name, selected, onClick }) {
    if (!name){
       
        return (
            <SeatStyle
                able={able}
                selected={selected}
                onClick={onClick}
            >
                 <p>{name}</p>
            </SeatStyle>
        );
        
    } else {
        if (!selected){
            return (
                <SeatStyle
                    able={able}
                    onClick={onClick}
                >
                    <p>{name}</p>
                </SeatStyle>
            );
        } else {
        return (
            <SeatStyle
                able={able}
                onClick={onClick}
                selected={selected}
            >
                <p>{name}</p>
            </SeatStyle>
        );
    }
       
    } 
    
};

const SeatStyle = styled.div`
box-sizing: border-box;
font-family: 'Roboto';
font-weight: 400;
font-size: 12px;
color: #000000;
border-radius: 50%;
width: 26px;
height: 26px;
background-color: ${props => props.able ? (
    props.selected ?  '#C3CFD9' : '#8DD7CF'
) : '#FBE192'};
margin-right: 2%;
margin-bottom: 4%;
border: 1px solid ${props => props.able ? (
    props.selected ?  '#808F9D' : '#1AAE9E'
) : '#F7C52B'};
border-radius: 12px;

display: flex;
flex-direction: center;
align-items: center;

p {
    margin-left: 6px;
}

&:hover {
    filter: brightness(0.9);
}
`;