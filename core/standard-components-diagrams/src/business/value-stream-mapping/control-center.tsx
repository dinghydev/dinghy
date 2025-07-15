import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTROL_CENTER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.control_center;',
  _width: 80,
  _height: 80,
}

export function ControlCenter(props: DiagramNodeProps) {
  return <Shape {...CONTROL_CENTER} {...props} />
}
