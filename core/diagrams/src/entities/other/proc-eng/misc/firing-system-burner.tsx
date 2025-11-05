import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIRING_SYSTEM_BURNER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.firing_system,_burner;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function FiringSystemBurner(props: NodeProps) {
  return (
    <Shape
      {...FIRING_SYSTEM_BURNER}
      {...props}
      _style={extendStyle(FIRING_SYSTEM_BURNER, props)}
    />
  )
}
