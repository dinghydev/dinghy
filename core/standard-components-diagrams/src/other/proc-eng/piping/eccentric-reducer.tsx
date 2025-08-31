import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ECCENTRIC_REDUCER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.eccentric_reducer;',
  _width: 20,
  _height: 15,
}

export function EccentricReducer(props: DiagramNodeProps) {
  return (
    <Shape
      {...ECCENTRIC_REDUCER}
      {...props}
      _style={extendStyle(ECCENTRIC_REDUCER, props)}
    />
  )
}
