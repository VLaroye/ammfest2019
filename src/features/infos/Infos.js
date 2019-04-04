import React, { Component } from 'react';
import styled from 'styled-components';
import { AppBar, Tabs, Tab, Grid, Card } from '@material-ui/core'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import media from 'utils/media';

import SectionTitle from 'components/SectionTitle';

const Container = styled.div`
  width: 80%;
  height: 500px;
  margin-bottom:5em;
`;

const StyledTabs = styled(Tabs)`
  width:100%;
  background-color:#193D29;
`;

const StyledTab = styled(Tab)`
 max-width: 100%!important;
 width:50%;
 background-color:#653F7D!important;
 font-weight:bold!important;
 font-size:1.5em!important;
`;

const StyledCard = styled(Card)`
  background-color: #4CBC7E!important;
  color:white!important;

  iframe {
    width: 100%;
    height: 450px;

  ${media.tablet`
      width: 50%;
  `}

  }

  .text {
    width:50%;
  }

  p {
    text-align:center;
    padding:1em;
  }
  span {
    font-weight:bold;
    letter-spacing:5px;
    font-size:1.2em;
  }

`;

const GridContainer = styled(Grid)`
  display:flex;
  flex-direction:column;
  align-items:center;

  ${media.tablet`
      flex-direction:row;
  `}

  ${media.laptop`
      
  `}

  ${media.xl`
     
  `}
`;

const Icons = styled.div`
  text-align:center;
  font-size:2em;

  .icon {
    margin:0.5em;
  }
`;
class Infos extends Component {
  state = {
    value: 1,
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render () {
    return ( 
      <div>
        <SectionTitle text="Informations"/>
        <Grid container direction="row" justify="center" alignItems="center" >
          <Container>
            <AppBar position="static">
              <StyledTabs indicatorColor="secondary" value={ this.state.value } onChange={ this.handleChange }>
                <StyledTab label="VENDREDI"/>
                <StyledTab label="SAMEDI" />
              </StyledTabs>
            </AppBar>
            { 
              this.state.value  === 0 ?
              <StyledCard>
                <GridContainer>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.0913816523794!2d2.580194316078457!3d50.81094557952675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dce62c8cdf75e1%3A0x7f6d1318755275ea!2sPlace+Saint-Pierre%2C+59114+Steenvoorde!5e0!3m2!1sfr!2sfr!4v1553187285964"/>
                  <div>Hey</div>
                </GridContainer> 
              </StyledCard>
              : 
              <StyledCard>
                <GridContainer>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40321.747804775296!2d2.5335979!3d50.8291405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dce89edcba7857%3A0x259e8d22100fd6aa!2sPetit+Chemin+d&#39;Hazebrouck%2C+59114+Steenvoorde!5e0!3m2!1sfr!2sfr!4v1553187400988"/>
                <div className="text">
                  <p><span>LIEU</span> :<br></br> Terrain des Archers - Petit Chemin d'Hazebrouck <br></br> 59114, STEENVOORDE <br></br>Parking à 100m</p>
                  <p><span>HORAIRES</span> : <br></br>OUVERTURE DES PORTES : 14h00 <br></br> FERMETURE : 3h00</p>
                  <p><span>TARIF</span> : <br></br>
                      PREVENTE : 12€ + 1€ de frais de réservation <br></br>
                      SUR PLACE : 15€ 
                  </p>
                  <Icons>
                    <FontAwesomeIcon className="icon" icon='campground' />
                    <FontAwesomeIcon className="icon" icon='utensils' />
                  </Icons>
                </div>
                </GridContainer> 
              </StyledCard>
            }
          </Container>

        </Grid>  
    
      </div>
     )
  }
}

export default Infos;