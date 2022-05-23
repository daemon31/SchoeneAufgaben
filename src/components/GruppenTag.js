import React from 'react'
import ArtikelTag from './ArtikelTag'

class GruppenTag extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const gruppe = this.props.gruppe

    let gruppenHeader = ""
    if (this.props.gekauft == false)
    {
      gruppenHeader = (<dt>
        <span>{gruppe.name}</span>
        <i className="material-icons">expand_less</i>
      </dt>)
    }

    let artikelArray = []
    for (const film of gruppe.artikelListe) {
      if (film.gekauft == this.props.gekauft) {
        artikelArray.push(<ArtikelTag artikel={film} key={film.id}/>)
      }
    }
    return (
      <React.Fragment>
        <dt>Obst & Gemüse
          <i className="material-icons">expand_less</i>
        </dt>
        <dd><label><input type="checkbox"/> Brokkoli</label></dd>
        <dt >Getreideprodukte
          <i className="material-icons">expand_less</i>
        </dt>
        <dd><label><input type="checkbox"/> Reis</label></dd>
        <dt >Milchprodukte
          <i className="material-icons">expand_less</i>
        </dt>
        <dd><label><input type="checkbox"/> Streukäse</label></dd>
      </React.Fragment>
    )
  }
}

export default GruppenTag
