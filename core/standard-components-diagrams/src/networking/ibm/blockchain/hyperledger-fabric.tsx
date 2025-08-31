import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HYPERLEDGER_FABRIC = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/blockchain/hyperledger_fabric.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function HyperledgerFabric(props: DiagramNodeProps) {
  return (
    <Shape
      {...HYPERLEDGER_FABRIC}
      {...props}
      _style={extendStyle(HYPERLEDGER_FABRIC, props)}
    />
  )
}
