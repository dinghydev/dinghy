import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZUREATTESTATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/AzureAttestation.svg;strokeColor=none;',
  },
  _width: 56.00000000000001,
  _height: 68,
}

export function Azureattestation(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZUREATTESTATION}
      {...props}
      _style={extendStyle(AZUREATTESTATION, props)}
    />
  )
}
