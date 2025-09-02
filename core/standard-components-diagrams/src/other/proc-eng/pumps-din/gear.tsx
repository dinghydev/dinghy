import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GEAR = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_din.gear;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Gear(props: DiagramNodeProps) {
  return <Shape {...GEAR} {...props} _style={extendStyle(GEAR, props)} />
}
