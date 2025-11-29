import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPENSATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.compensator;',
  },
  _width: 40,
  _height: 80,
}

export function Compensator(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMPENSATOR)} />
}
