import React, { Component } from 'react';

import Tech1 from '../images/tech/tech (1).svg'
import Tech2 from '../images/tech/tech (2).svg'
import Tech3 from '../images/tech/tech (3).svg'
import Tech4 from '../images/tech/tech (4).svg'
import Tech5 from '../images/tech/tech (5).svg'
import Tech6 from '../images/tech/tech (6).svg'
import Tech7 from '../images/tech/tech (7).svg'
import Tech8 from '../images/tech/tech (8).svg'
import Tech9 from '../images/tech/tech (9).svg'
import Tech10 from '../images/tech/tech (10).svg'
import Tech11 from '../images/tech/tech (11).svg'
import Tech12 from '../images/tech/tech (12).svg'
import Tech13 from '../images/tech/tech (13).svg'
import Tech14 from '../images/tech/tech (14).svg'
import Tech15 from '../images/tech/tech (15).svg'
import Tech16 from '../images/tech/tech (16).svg'
import Tech17 from '../images/tech/tech (17).svg'
// import Tech1 from '../images/tech/tech (1).svg'


import TechCard from './TechCard';

// const buildTechUrls = 

class TechMarquee extends Component {
  state = {  }
  render() { 
    console.log(Tech1)
    return (
      <div className="marquee">
        <div className="marquee-content"> 
          <TechCard source={ Tech1 } />
          <TechCard source={ Tech2 } />
          <TechCard source={ Tech3 } />
          <TechCard source={ Tech4 } />
          <TechCard source={ Tech5 } />
          <TechCard source={ Tech6 } />
          <TechCard source={ Tech7 } />
          <TechCard source={ Tech8 } />
          <TechCard source={ Tech9 } />
          <TechCard source={ Tech10 } />
          <TechCard source={ Tech11 } />
          <TechCard source={ Tech12 } />
          <TechCard source={ Tech13 } />
          <TechCard source={ Tech14 } />
          <TechCard source={ Tech15 } />
          <TechCard source={ Tech16 } />
          <TechCard source={ Tech17 } />
        </div>
      </div>
  )
  }
}
 
export default TechMarquee;
