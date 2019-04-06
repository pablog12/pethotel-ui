import React from 'react'
import {Image} from 'semantic-ui-react'

import moltin from '../../images/mascotas-logo.png'

const Logo = () => (
  <Image
    size="mini"
    src={moltin}
    style={{marginRight: '1.5em'}}
    alt="Masctoas"
  />
)

export default Logo
