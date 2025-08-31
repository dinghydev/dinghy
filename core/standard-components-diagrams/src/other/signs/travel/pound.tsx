import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POUND = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.pound;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 68,
  _height: 98,
}

export function Pound(props: DiagramNodeProps) {
  return <Shape {...POUND} {...props} _style={extendStyle(POUND, props)} />
}
