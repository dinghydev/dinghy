import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const QUANTUM_TECHNOLOGIES_ICON = {
  _style: {
    entity:
      'sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#ED7100;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.quantum_technologies;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function QuantumTechnologiesIcon(props: DiagramNodeProps) {
  return (
    <Shape
      {...QUANTUM_TECHNOLOGIES_ICON}
      {...props}
      _style={extendStyle(QUANTUM_TECHNOLOGIES_ICON, props)}
    />
  )
}
