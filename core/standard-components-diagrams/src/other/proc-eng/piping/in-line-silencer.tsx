import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IN_LINE_SILENCER = {
  _style: {
    entity:
      'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.piping.in-line_silencer;',
  },
  _width: 50,
  _height: 20,
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
