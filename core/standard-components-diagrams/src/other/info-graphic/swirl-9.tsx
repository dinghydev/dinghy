import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWIRL_9 = {
  _style:
    'shape=manualInput;whiteSpace=wrap;html=1;shadow=0;fillColor=#AE4132;strokeColor=none;fontSize=12;fontColor=#FFFFFF;align=center;direction=north;flipV=1;rounded=0;',
  _width: 2,
  _height: 215,
}

export function Swirl9(props: DiagramNodeProps) {
  return <Shape {...SWIRL_9} {...props} />
}
