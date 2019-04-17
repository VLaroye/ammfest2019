import React, { Fragment } from 'react';
import styled from 'styled-components';
import Footer from 'features/footer/Footer';

const Container = styled.div`
  width: 50%;
  margin: 10em auto;
  background-color: white;
  padding: 6em;    
  text-align:center;
  border: 8px solid #35CC77;
    
    h1 {
      font-size: 2.5em;
      text-transform: uppercase;
    }

    h2 {
      text-transform: uppercase;
      padding-top: 2em;
      letter-spacing: 2px;

    }
    p {
      margin: 0em;
    }
    .text {
      width: 70%;
      margin: auto;
      text-align: justify;
      padding: 1em;
    }
`;


const About = () => {
  return (
    <Fragment>
      <Container>
        <h1>Mentions légales</h1>
          <h2>Hébergeur</h2>
            <p>OVH</p>
            <p>SAS au capital de 10 059 500 €</p>
            <p>RCS Lille Métropole 424 761 419 00045</p>
            <p>Code APE 6202A</p>
            <p>N° TVA : FR 22 424 761 419</p>
            <p>2 rue Kellermann – 59100 Roubaix – France.</p>
          <h2>Propriété intellectuelle</h2>
            <p className="text">L'association est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.</p>
            <p className="text">Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l'association.</p>
            <p className="text">Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
          <h2>Limitation de responsabilité</h2>
            <p className="text">L'association ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site ammfest, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>
            <p className="text">L'association ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site ammfest.</p>
          <h2>Droit applicable et attribution de juridiction</h2>
            <p className="text"> Tout litige en relation avec l’utilisation du site ammfest est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p>
          <h2>Les principales lois concernées</h2>
            <p className="text">Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.</p>
            <p className="text"> Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</p>
          <h2>Lexique</h2>
            <p className="text">Utilisateur : Internaute se connectant, utilisant le site susnommé.</p>
            <p className="text">Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>
      </Container>
      <Footer />
    </Fragment>
 )
}

export default About;