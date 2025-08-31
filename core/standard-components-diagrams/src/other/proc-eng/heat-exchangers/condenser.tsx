import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONDENSER = {
  _style:
    'shape=mxgraph.pid.heat_exchangers.condenser;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 60,
}

export function Condenser(props: DiagramNodeProps) {
  return (
    <Shape {...CONDENSER} {...props} _style={extendStyle(CONDENSER, props)} />
  )
}
