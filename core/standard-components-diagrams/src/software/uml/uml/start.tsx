import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const START = {
  _style:
    'ellipse;html=1;shape=startState;fillColor=#000000;strokeColor=#ff0000;',
  _width: 0,
  _height: 90,
}

export function Start(props: DiagramNodeProps) {
  return <Shape {...START} {...props} />
}
