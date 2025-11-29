import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHAPING_MACHINE_HORIZONTAL = {
  _style: {
    entity:
      'shape=mxgraph.pid.shaping_machines.shaping_machine_(horizontal);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 60,
}

export function ShapingMachineHorizontal(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SHAPING_MACHINE_HORIZONTAL)} />
  )
}
