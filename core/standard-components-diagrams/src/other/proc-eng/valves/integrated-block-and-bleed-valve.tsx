import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTEGRATED_BLOCK_AND_BLEED_VALVE = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.blockBleedValve;actuator=none',
  _width: 100,
  _height: 130,
}

export function IntegratedBlockAndBleedValve(props: DiagramNodeProps) {
  return <Shape {...INTEGRATED_BLOCK_AND_BLEED_VALVE} {...props} />
}
