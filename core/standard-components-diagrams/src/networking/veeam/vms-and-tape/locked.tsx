import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOCKED = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.locked;',
  _width: 30.4,
  _height: 34.4,
}

export function Locked(props: DiagramNodeProps) {
  return <Shape {...LOCKED} {...props} />
}
