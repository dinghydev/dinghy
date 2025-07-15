import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FLEXIBLE_PIPE = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.flexible_pipe;pointerEvents=1;',
  _width: 60,
  _height: 16,
}

export function FlexiblePipe(props: DiagramNodeProps) {
  return <Shape {...FLEXIBLE_PIPE} {...props} />
}
