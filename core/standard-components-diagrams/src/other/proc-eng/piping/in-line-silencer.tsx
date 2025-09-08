import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IN_LINE_SILENCER = {
  _style: {
    entity:
      'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.piping.in-line_silencer;',
  },
  _original_width: 50,
  _original_height: 20,
}

export function InLineSilencer(props: DiagramNodeProps) {
  return (
    <Shape
      {...IN_LINE_SILENCER}
      {...props}
      _style={extendStyle(IN_LINE_SILENCER, props)}
    />
  )
}
