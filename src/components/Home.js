import React from 'react'

const Home = () => {
  return (
    <div className='wrapper'>
      <h2>Home</h2>
      <p className='inhoud'>
        Dit project is ontwikkeld als assessment voor de sollicitatie van een stage bij Mr. Winston. Ik wil graag uitleggen waaruit deze applicatie bestaat en hoe deze werkt.
        <br></br><br></br>
        Ten eerste is deze applicatie werkend op zowel desktop als mobiel. Het kan gezien worden als een PWA. De telefoon waarmee ik in de inspector getest heb, is de Iphone SE. Vooralsnog zou het voor alle formaten werkend moeten zijn.
        <br></br><br></br>
        Ten tweede bestaat deze applicatie uit meerdere pagina's. Aan de linkerkant is er een sidebar met een menu weergegeven en aan de rechterkant bevind zich de geselecteerde inhoud. In het geval van een mobiel, bevind zich aan de linkerkant een hamburgermenu, waarmee de eerder benoemde sidebar geopend kan worden. De enige pagina die ik uitgewerkt heb, is de Todo-list. De overige pagina's doen er niet toe, waardoor de inhoud opgevuld is met een standaard lorem ipsum.
        <br></br><br></br>
        Tot slot bestaat de Todo-list uit verschillende functies. Het is mogelijk om een taak toe te voegen door op de 'add task' knop te klikken. Daarnaast is het mogelijk om deze te bewerken door op het potloodje te klikken en te verwijderen door op het prullenbakje te klikken. Ook is het mogelijk om aan te geven wanneer een taak voltooid is. Dit kun je doen door op de tekst van de opgegeven taak te klikken.
      </p>
    </div>
  )
}

export default Home
