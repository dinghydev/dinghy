import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PREPARATION = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=hexagon;perimeter=hexagonPerimeter2;arcSize=6;size=0.27;',
  _width: 100,
  _height: 60,
}

export function Preparation(props: DiagramNodeProps) {
  return <Shape {...PREPARATION} {...props} />
}
