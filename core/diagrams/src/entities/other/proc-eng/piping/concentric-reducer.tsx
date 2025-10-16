import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONCENTRIC_REDUCER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.concentric_reducer;',
  },
  _original_width: 20,
  _original_height: 20,
}

export function ConcentricReducer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONCENTRIC_REDUCER}
      {...props}
      _style={extendStyle(CONCENTRIC_REDUCER, props)}
    />
  )
}
