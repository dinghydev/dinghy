import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AZUREATTESTATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/AzureAttestation.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 68,
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
