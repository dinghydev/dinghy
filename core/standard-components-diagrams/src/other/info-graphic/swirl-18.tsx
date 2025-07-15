import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWIRL_18 = {
  _style:
    'shape=manualInput;whiteSpace=wrap;html=1;shadow=0;fillColor=#AE4132;strokeColor=none;fontSize=12;fontColor=#FFFFFF;align=center;direction=north;flipH=1;rounded=0;',
  _width: 11,
  _height: 215,
}

export function Swirl18(props: DiagramNodeProps) {
  return <Shape {...SWIRL_18} {...props} />
}
