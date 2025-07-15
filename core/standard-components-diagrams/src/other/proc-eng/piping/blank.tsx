import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BLANK = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.blank2;',
  _width: 20,
  _height: 60,
}

export function Blank(props: DiagramNodeProps) {
  return <Shape {...BLANK} {...props} />
}
