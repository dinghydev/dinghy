import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TURBINE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.engines.turbine',
  },
  _original_width: 70,
  _original_height: 100,
}

export function Turbine(props: DiagramNodeProps) {
  return <Shape {...TURBINE} {...props} _style={extendStyle(TURBINE, props)} />
}
