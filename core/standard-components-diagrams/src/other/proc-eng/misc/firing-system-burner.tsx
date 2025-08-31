import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIRING_SYSTEM_BURNER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.firing_system,_burner;',
  },
  _width: 60,
  _height: 60,
}

export function FiringSystemBurner(props: DiagramNodeProps) {
  return (
    <Shape
      {...FIRING_SYSTEM_BURNER}
      {...props}
      _style={extendStyle(FIRING_SYSTEM_BURNER, props)}
    />
  )
}
