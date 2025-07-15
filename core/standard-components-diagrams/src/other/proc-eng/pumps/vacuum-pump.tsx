import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VACUUM_PUMP = {
  _style:
    'shape=mxgraph.pid.pumps.vacuum_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 99,
  _height: 49,
}

export function VacuumPump(props: DiagramNodeProps) {
  return <Shape {...VACUUM_PUMP} {...props} />
}
