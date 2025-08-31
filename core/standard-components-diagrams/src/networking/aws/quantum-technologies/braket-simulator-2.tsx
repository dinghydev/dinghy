import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BRAKET_SIMULATOR_2 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.braket_simulator_1;',
  },
  _width: 60,
  _height: 60,
}

export function BraketSimulator2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BRAKET_SIMULATOR_2}
      {...props}
      _style={extendStyle(BRAKET_SIMULATOR_2, props)}
    />
  )
}
