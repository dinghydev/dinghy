import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REDUCER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.reducer;',
  },
  _width: 70,
  _height: 50,
}

export function Reducer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, REDUCER)} />
}
