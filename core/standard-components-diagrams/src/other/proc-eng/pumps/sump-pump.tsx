import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SUMP_PUMP = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.sump_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 103,
  _original_height: 186,
}

export function SumpPump(props: DiagramNodeProps) {
  return (
    <Shape {...SUMP_PUMP} {...props} _style={extendStyle(SUMP_PUMP, props)} />
  )
}
