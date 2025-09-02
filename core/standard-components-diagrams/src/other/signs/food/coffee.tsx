import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COFFEE = {
  _style: {
    entity:
      'shape=mxgraph.signs.food.coffee;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 61,
}

export function Coffee(props: DiagramNodeProps) {
  return <Shape {...COFFEE} {...props} _style={extendStyle(COFFEE, props)} />
}
