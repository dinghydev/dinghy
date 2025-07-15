import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PUSH_ARROW = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.push_arrow;',
  _width: 100,
  _height: 30,
}

export function PushArrow(props: DiagramNodeProps) {
  return <Shape {...PUSH_ARROW} {...props} />
}
