import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COUPLING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.coupling;',
  },
  _width: 50,
  _height: 100,
}

export function Coupling(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COUPLING)} />
}
