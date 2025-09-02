import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BRAKET_MANAGED_SIMULATOR = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.braket_managed_simulator;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function BraketManagedSimulator(props: DiagramNodeProps) {
  return (
    <Shape
      {...BRAKET_MANAGED_SIMULATOR}
      {...props}
      _style={extendStyle(BRAKET_MANAGED_SIMULATOR, props)}
    />
  )
}
