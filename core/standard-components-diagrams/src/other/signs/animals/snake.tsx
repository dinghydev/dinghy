import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SNAKE = {
  _style:
    'shape=mxgraph.signs.animals.snake;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function Snake(props: DiagramNodeProps) {
  return <Shape {...SNAKE} {...props} _style={extendStyle(SNAKE, props)} />
}
