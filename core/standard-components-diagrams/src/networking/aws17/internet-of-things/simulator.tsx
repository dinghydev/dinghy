import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SIMULATOR = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.simulator;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 75,
  _original_height: 78,
}

export function Simulator(props: DiagramNodeProps) {
  return (
    <Shape {...SIMULATOR} {...props} _style={extendStyle(SIMULATOR, props)} />
  )
}
