import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SNAKE = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.snake;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function Snake(props: DiagramNodeProps) {
  return <Shape {...SNAKE} {...props} _style={extendStyle(SNAKE, props)} />
}
