import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWIRL_7 = {
  _style:
    'shape=manualInput;whiteSpace=wrap;html=1;shadow=0;fillColor=#10739E;strokeColor=none;fontSize=12;fontColor=#FFFFFF;align=center;direction=north;flipV=1;rounded=0;',
  _width: 0,
  _height: 215,
}

export function Swirl7(props: DiagramNodeProps) {
  return <Shape {...SWIRL_7} {...props} />
}
