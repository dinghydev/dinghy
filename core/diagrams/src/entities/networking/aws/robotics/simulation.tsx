import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SIMULATION = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.simulation;',
  },
  _original_width: 78,
  _original_height: 64,
}

export function Simulation(props: NodeProps) {
  return (
    <Shape {...SIMULATION} {...props} _style={extendStyle(SIMULATION, props)} />
  )
}
