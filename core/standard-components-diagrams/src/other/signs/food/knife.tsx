import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KNIFE = {
  _style: {
    entity:
      'shape=mxgraph.signs.food.knife;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 97,
  _original_height: 11,
}

export function Knife(props: DiagramNodeProps) {
  return <Shape {...KNIFE} {...props} _style={extendStyle(KNIFE, props)} />
}
