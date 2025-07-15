import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWIRL_17 = {
  _style:
    'shape=manualInput;whiteSpace=wrap;html=1;shadow=0;fillColor=#F2931E;strokeColor=none;fontSize=12;fontColor=#FFFFFF;align=center;direction=north;flipH=1;rounded=0;',
  _width: 10,
  _height: 215,
}

export function Swirl17(props: DiagramNodeProps) {
  return <Shape {...SWIRL_17} {...props} />
}
