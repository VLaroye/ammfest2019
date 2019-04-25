import React, { Component } from 'react';
import styled from 'styled-components';
import { AppBar, Tabs, Tab, Grid, Card } from '@material-ui/core'; 
import media from 'utils/media';
import SectionTitle from 'components/SectionTitle';

// ICONS 
import tente from 'assets/icons/tente.png';
import cine from 'assets/icons/cine.png';
import frite from 'assets/icons/frite.png';
import parking from 'assets/icons/parking.png';
import biere from 'assets/icons/biere.png';

const Info = styled.div`

  `;

const Container = styled.div`
  width: 97%;
  height: 100%;
  margin-bottom:5em;

  ${media.laptop`
      width: 90%;
  `}

  ${media.desktop`
    max-width: 80%;
  `}

`;

const StyledTabs = styled(Tabs)`
  width:100%;
  background-color:#042b26;
  box-sizing: border-box;
  box-shadow: 5px 5px 40px #042b26;
`;

const StyledTab = styled(Tab)`
 max-width: 100%!important;
 width:50%;
 background-color: #042b26!important;
 font-weight:700!important;
 font-size:1.2em!important;
 letter-spacing: 2px!important;
 color:white!important;
`;

const StyledCard = styled(Card)`
  border-radius: 0!important;
  background-color: #64e9a2!important;
  color: #042b26;

  iframe {
    width: 100%;
    height: 300px;

  ${media.tablet`
      width: 50%;
      height: 450px;
  `}

  }
`;

const GridContainer = styled(Grid)`
  display:flex;
  flex-direction:column;
  align-items:center;
  height: 100%;
  position:relative;
  
  ${media.tablet`
      flex-direction:row;
  `}

  ${media.laptop`
      
  `}

  ${media.xl`
     
  `}
`;

const InformationFriday= styled.div`
  width: 100%;

  ${media.tablet`
    width: 50%;
  `} 

`;

const InformationSaturday= styled.div`
  width: 100%;
  display:flex;

  ${media.tablet`
    box-sizing: border-box;
    height: 100%;
    position:absolute;
    left: 50%;
    width: 50%;
  `} 

  .text {
    margin:auto 15%;
    width: 90%;

    ${media.tablet`
      margin: auto;
  `} 

  }

  p {
    margin: 0;
    font-size: 0.8em;

    ${media.tablet`
    padding:0.5em;
    margin: 0 0 0 10%;
    font-size: 0.9em;
  `} 

    ${media.laptop`
      padding:0.5em 15%;
      margin: 0 0 0 10%;
      font-size: 1em;
    `} 


  
  }
  
  #title{
    font-size: 1.2em;
    font-weight:900;
    letter-spacing:2px;
  }

  span {
    font-weight: bold;
  }

  #icons {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-color:#034228;
    min-width: 20%
  }

  .icon {
    margin: auto;
    width: 50px;
    height: 50px;
    padding: 0.4em;
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
      <Info id="info">
        <SectionTitle text="Informations"/>
        <Grid container direction="row" justify="center" alignItems="center" >
          <Container>
            <AppBar position="static">
              <StyledTabs indicatorColor="primary" value={ this.state.value } onChange={ this.handleChange }>
                <StyledTab label="VENDREDI"/>
                <StyledTab label="SAMEDI" />
              </StyledTabs>
            </AppBar>
            { 
              this.state.value  === 0 ?
              <StyledCard>
                <GridContainer>
                  <InformationFriday>
                    Hey
                  </InformationFriday>
                  <iframe title="carte Vendredi" frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.0913816523794!2d2.580194316078457!3d50.81094557952675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dce62c8cdf75e1%3A0x7f6d1318755275ea!2sPlace+Saint-Pierre%2C+59114+Steenvoorde!5e0!3m2!1sfr!2sfr!4v1553187285964"/>
                </GridContainer> 
              </StyledCard>
              : 
              <StyledCard>
                <GridContainer>
                  <InformationSaturday>
                    <div className="text">
                      <p><span id="title">LIEU</span><br></br> Terrain des Archers <br/>Chemin Petit d'Hazebrouck <br></br> 59114, STEENVOORDE <br></br>Parking à 100m</p>
                      <p><span id="title">HORAIRES</span><br></br>Ouverture: <span>14h00</span> <br></br> Fermeture: <span>3h00</span></p>
                      <p><span id="title">TARIF</span><br/>
                          Prévente : <span>13€</span><br/>
                          Sur place : <span>15€</span>
                      </p>
                      <p><span id="title">CAMPING</span> <br></br>Uniquement pour la nuit <br/>du SAMEDI au DIMANCHE</p>
                    </div>
                    <div id="icons">
                      <img src={ biere } className="icon" alt="tente"/>
                      <img src={ frite } className="icon" alt="tente"/>
                      <img src={ cine } className="icon" alt="tente"/>
                      <img src={ parking } className="icon" alt="tente"/>
                      <img src={ tente } className="icon" alt="tente"/>
                    </div>
                  </InformationSaturday>
                  <iframe title="carte Samedi" frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10083.860534326544!2d2.556718469112891!3d50.81328467952719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dce62091f889a1%3A0x7ec7de275ff362a9!2sChemin+Petit+d&#39;Hazebrouck%2C+59114+Steenvoorde!5e0!3m2!1sfr!2sfr!4v1555489927534!5m2!1sfr!2sfr"/>
                </GridContainer> 
              </StyledCard>
            }
          </Container>
        </Grid>  
      </Info>
     )
  }
}

export default Infos;