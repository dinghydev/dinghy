import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTEGRATED_BLOCK_AND_BLEED_VALVE_MANUAL = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.blockBleedValve;actuator=man',
  _width: 100,
  _height: 170,
}

export function IntegratedBlockAndBleedValveManual(props: DiagramNodeProps) {
  return <Shape {...INTEGRATED_BLOCK_AND_BLEED_VALVE_MANUAL} {...props} />
}
