import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRIMMER_VARIABLE_CAPACITOR_US = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.variable_capacitor_1;',
  },
  _width: 100,
  _height: 60,
}

export function TrimmerVariableCapacitorUs(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, TRIMMER_VARIABLE_CAPACITOR_US)}
    />
  )
}
