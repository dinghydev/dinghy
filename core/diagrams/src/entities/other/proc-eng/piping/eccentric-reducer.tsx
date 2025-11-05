import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ECCENTRIC_REDUCER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.eccentric_reducer;',
  },
  _width: 20,
  _height: 15,
}

export function EccentricReducer(props: NodeProps) {
  return (
    <Shape
      {...ECCENTRIC_REDUCER}
      {...props}
      _style={extendStyle(ECCENTRIC_REDUCER, props)}
    />
  )
}
