import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCREW_PUMP = {
  _style:
    'shape=mxgraph.pid.pumps.screw_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 70,
  _height: 66,
}

export function ScrewPump(props: DiagramNodeProps) {
  return <Shape {...SCREW_PUMP} {...props} />
}
