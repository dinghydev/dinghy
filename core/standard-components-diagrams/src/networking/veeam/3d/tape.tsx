import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TAPE = {
  _style:
    'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.tape;',
  _width: 58,
  _height: 58,
}

export function Tape(props: DiagramNodeProps) {
  return <Shape {...TAPE} {...props} />
}
