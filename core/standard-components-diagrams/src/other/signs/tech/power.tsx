import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWER = {
  _style:
    'shape=mxgraph.signs.tech.power;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 91,
  _height: 98,
}

export function Power(props: DiagramNodeProps) {
  return <Shape {...POWER} {...props} _style={extendStyle(POWER, props)} />
}
