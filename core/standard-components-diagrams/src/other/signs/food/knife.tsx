import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const KNIFE = {
  _style: {
    entity:
      'shape=mxgraph.signs.food.knife;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 97,
  _height: 11,
}

export function Knife(props: DiagramNodeProps) {
  return <Shape {...KNIFE} {...props} _style={extendStyle(KNIFE, props)} />
}
