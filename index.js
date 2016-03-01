import fs from 'fs'
import Location from './Location'
import mjml from '../mjml/lib'

/*
  Compile an mjml string
*/
const htmlOutput = mjml.mjml2html(`<mj-body>
  <mj-section>
    <mj-column width="50%">
      <mj-location address="37bis, Rue du Sentier, 75002 Paris, France" />
    </mj-column>
  </mj-section>
</mj-body>
`)

/*
  Print the responsive HTML generated
*/
fs.writeFile('output.html', htmlOutput);
