import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHAPING_MACHINE_VERTICAL = {
  _style: {
    entity:
      'shape=mxgraph.pid.shaping_machines.shaping_machine_(vertical);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function ShapingMachineVertical(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHAPING_MACHINE_VERTICAL}
      {...props}
      _style={extendStyle(SHAPING_MACHINE_VERTICAL, props)}
    />
  )
}
