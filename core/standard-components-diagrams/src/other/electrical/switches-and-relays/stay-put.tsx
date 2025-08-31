import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STAY_PUT = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.stay_put;',
  _width: 75,
  _height: 7,
}

export function StayPut(props: DiagramNodeProps) {
  return (
    <Shape {...STAY_PUT} {...props} _style={extendStyle(STAY_PUT, props)} />
  )
}
