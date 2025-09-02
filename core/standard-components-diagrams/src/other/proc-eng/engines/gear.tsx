import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GEAR = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;align=center;html=1;shape=mxgraph.pid.engines.gear;fontSize=45;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Gear(props: DiagramNodeProps) {
  return <Shape {...GEAR} {...props} _style={extendStyle(GEAR, props)} />
}
