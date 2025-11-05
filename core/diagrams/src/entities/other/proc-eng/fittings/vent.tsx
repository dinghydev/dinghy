import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.vent;',
  },
  _width: 80,
  _height: 140,
}

export function Vent(props: NodeProps) {
  return <Shape {...VENT} {...props} _style={extendStyle(VENT, props)} />
}
