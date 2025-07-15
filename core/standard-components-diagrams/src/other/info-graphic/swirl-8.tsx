import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWIRL_8 = {
  _style:
    'shape=manualInput;whiteSpace=wrap;html=1;shadow=0;fillColor=#F2931E;strokeColor=none;fontSize=12;fontColor=#FFFFFF;align=center;direction=north;flipV=1;rounded=0;',
  _width: 1,
  _height: 215,
}

export function Swirl8(props: DiagramNodeProps) {
  return <Shape {...SWIRL_8} {...props} />
}
