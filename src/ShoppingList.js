import React from 'react'
import GruppenTag from './components/GruppenTag'
import App from './model/Shopping'


class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
    this.initialisieren()
  }

  initialisieren() {
    let fantasy = App.gruppeHinzufuegen("Fantasy")
    let film1 = fantasy.artikelHinzufuegen("Der Dunkle Kristall")
    film1.gekauft = true
    fantasy.artikelHinzufuegen("Die Barbaren")
    let scifi = App.gruppeHinzufuegen("Science Fiction")
    let film2 = scifi.artikelHinzufuegen("Alita - Battle Angel")
    film2.gekauft = true
    scifi.artikelHinzufuegen("Mad Max - Fury Road")
    let dokus = App.gruppeHinzufuegen("Dokumentationen")
    let film3 = dokus.artikelHinzufuegen("Endgame - Blaupause für die Globale Versklavung")
    film3.gekauft = true
    dokus.artikelHinzufuegen("Die Kabale")
  }

  render() {
    let nochZuKaufen = []
    for (const gruppe of App.gruppenListe) {
      nochZuKaufen.push(<GruppenTag
        key={gruppe.id}
        gruppe={gruppe}
        gekauft={false}/>)
    }


    let schonGekauft = []
    for (const gruppe of App.gruppenListe) {
      schonGekauft.push(<GruppenTag
        key={gruppe.id}
        gruppe={gruppe}
        gekauft={true}/>)
    }

      return (
          //füge hier deinen HTML-Code ein
          <div id="container">
            {/* ToDo: füge hier drunter Deinen HTML-Code ein */}

            <header>
              <h1>Einkaufsliste 2</h1>
              <nav>
                <input type="text" placeholder="Artikel hinzufügen"/>
                <button className="material-icons" >add_circle</button>
              </nav>
            </header>

            <hr/>
            <main>
              <section>
                <h2>Einkaufen
                  <i className="material-icons">expand_less</i>
                </h2>
              <dl>
                <GruppenTag/>
                <GruppenTag/>
                </dl>
              </section>
              <hr/>
              <section>
                <h2>Erledigt
                  <i className="material-icons">expand_less</i>
                </h2>
                <dl>
                  <dt >Hülsenfrüchte
                    <i className="material-icons">expand_less</i>
                  </dt>
                  <dd><label><input type="checkbox"/> <s>Tofu</s></label></dd>
                </dl>
              </section>
              <hr/>
            </main>
            <footer>
              <nav>
                <button>
                  <span className="material-icons">bookmark_add</span> Gruppen
                </button>
                <button>
                  <span className="material-icons">sort</span> Sortieren
                </button>
                <button>
                  <span className="material-icons">settings</span> Einstellungen
                </button>
              </nav>
            </footer>
          </div>
      )
    }
  }

  export default ShoppingList
