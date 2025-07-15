import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IN_LINE_SILENCER = {
  _style:
    'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.piping.in-line_silencer;',
  _width: 50,
  _height: 20,
}

export function InLineSilencer(props: DiagramNodeProps) {
  return <Shape {...IN_LINE_SILENCER} {...props} />
}
