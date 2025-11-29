import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VENT_SILENCER = {
  _style: {
    entity:
      'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.piping.vent_silencer;',
  },
  _width: 20,
  _height: 80,
}

export function VentSilencer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VENT_SILENCER)} />
}
