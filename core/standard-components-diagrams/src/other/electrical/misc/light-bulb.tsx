import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIGHT_BULB = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.light_bulb;',
  _width: 60,
  _height: 50,
}

export function LightBulb(props: DiagramNodeProps) {
  return <Shape {...LIGHT_BULB} {...props} />
}
