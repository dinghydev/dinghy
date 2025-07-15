import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZUREATTESTATION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/AzureAttestation.svg;',
  _width: 56.00000000000001,
  _height: 68,
}

export function Azureattestation(props: DiagramNodeProps) {
  return <Shape {...AZUREATTESTATION} {...props} />
}
