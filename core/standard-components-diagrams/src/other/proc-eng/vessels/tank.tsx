import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TANK = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 40,
  _original_height: 95,
}

export function Tank(props: DiagramNodeProps) {
  return <Shape {...TANK} {...props} _style={extendStyle(TANK, props)} />
}
