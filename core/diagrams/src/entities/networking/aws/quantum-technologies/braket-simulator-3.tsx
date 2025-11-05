import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BRAKET_SIMULATOR_3 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.braket_simulator_2;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function BraketSimulator3(props: NodeProps) {
  return (
    <Shape
      {...BRAKET_SIMULATOR_3}
      {...props}
      _style={extendStyle(BRAKET_SIMULATOR_3, props)}
    />
  )
}
