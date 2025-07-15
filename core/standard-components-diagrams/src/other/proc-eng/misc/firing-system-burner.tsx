import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIRING_SYSTEM_BURNER = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.firing_system,_burner;',
  _width: 100,
  _height: 100,
}

export function FiringSystemBurner(props: DiagramNodeProps) {
  return <Shape {...FIRING_SYSTEM_BURNER} {...props} />
}
