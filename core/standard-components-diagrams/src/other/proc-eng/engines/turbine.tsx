import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TURBINE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.engines.turbine',
  },
  _width: 70,
  _height: 100,
}

export function Turbine(props: DiagramNodeProps) {
  return <Shape {...TURBINE} {...props} _style={extendStyle(TURBINE, props)} />
}
