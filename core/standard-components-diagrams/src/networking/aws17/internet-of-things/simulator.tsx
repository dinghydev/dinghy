import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIMULATOR = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.simulator;fillColor=#5294CF;gradientColor=none;',
  },
  _width: 75,
  _height: 78,
}

export function Simulator(props: DiagramNodeProps) {
  return (
    <Shape {...SIMULATOR} {...props} _style={extendStyle(SIMULATOR, props)} />
  )
}
