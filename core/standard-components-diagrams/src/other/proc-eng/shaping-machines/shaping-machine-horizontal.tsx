import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHAPING_MACHINE_HORIZONTAL = {
  _style:
    'shape=mxgraph.pid.shaping_machines.shaping_machine_(horizontal);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 60,
}

export function ShapingMachineHorizontal(props: DiagramNodeProps) {
  return <Shape {...SHAPING_MACHINE_HORIZONTAL} {...props} />
}
