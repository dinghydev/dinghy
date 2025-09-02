import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLEXIBLE_PIPE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.flexible_pipe;pointerEvents=1;',
  },
  _original_width: 60,
  _original_height: 16,
}

export function FlexiblePipe(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLEXIBLE_PIPE}
      {...props}
      _style={extendStyle(FLEXIBLE_PIPE, props)}
    />
  )
}
