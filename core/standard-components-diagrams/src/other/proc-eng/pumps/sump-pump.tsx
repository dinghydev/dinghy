import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUMP_PUMP = {
  _style:
    'shape=mxgraph.pid.pumps.sump_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 103,
  _height: 186,
}

export function SumpPump(props: DiagramNodeProps) {
  return <Shape {...SUMP_PUMP} {...props} />
}
