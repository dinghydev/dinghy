import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const END = {
  _style:
    'ellipse;html=1;shape=endState;fillColor=#000000;strokeColor=#ff0000;',
  _width: 30,
  _height: 30,
}

export function End(props: DiagramNodeProps) {
  return <Shape {...END} {...props} />
}
