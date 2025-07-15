import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BTP_BASIC_LAYER = {
  _style:
    'rounded=1;whiteSpace=wrap;html=1;strokeColor=#0070F2;fillColor=#EBF8FF;arcSize=32;absoluteArcSize=1;strokeWidth=1.5;',
  _width: 0,
  _height: 250,
}

export function BtpBasicLayer(props: DiagramNodeProps) {
  return <Shape {...BTP_BASIC_LAYER} {...props} />
}
