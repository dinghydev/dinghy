import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TURBINE = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.turbine;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 98,
  _original_height: 60,
}

export function Turbine(props: DiagramNodeProps) {
  return <Shape {...TURBINE} {...props} _style={extendStyle(TURBINE, props)} />
}
