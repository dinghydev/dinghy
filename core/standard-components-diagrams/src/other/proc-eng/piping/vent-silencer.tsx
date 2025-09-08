import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VENT_SILENCER = {
  _style: {
    entity:
      'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.piping.vent_silencer;',
  },
  _original_width: 20,
  _original_height: 80,
}

export function VentSilencer(props: DiagramNodeProps) {
  return (
    <Shape
      {...VENT_SILENCER}
      {...props}
      _style={extendStyle(VENT_SILENCER, props)}
    />
  )
}
