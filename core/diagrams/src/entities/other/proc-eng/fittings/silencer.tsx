import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SILENCER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.silencer;',
  },
  _width: 140,
  _height: 100,
}

export function Silencer(props: NodeProps) {
  return (
    <Shape {...SILENCER} {...props} _style={extendStyle(SILENCER, props)} />
  )
}
