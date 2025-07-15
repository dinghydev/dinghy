import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIVERTER_VALVE = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.diverter_valve;pointerEvents=1;',
  _width: 50,
  _height: 35,
}

export function DiverterValve(props: DiagramNodeProps) {
  return <Shape {...DIVERTER_VALVE} {...props} />
}
