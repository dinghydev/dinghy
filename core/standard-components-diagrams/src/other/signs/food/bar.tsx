import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BAR = {
  _style: {
    entity:
      'shape=mxgraph.signs.food.bar;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function Bar(props: DiagramNodeProps) {
  return <Shape {...BAR} {...props} _style={extendStyle(BAR, props)} />
}
