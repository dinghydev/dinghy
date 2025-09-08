import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STAY_PUT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.stay_put;',
  },
  _original_width: 75,
  _original_height: 7,
}

export function StayPut(props: DiagramNodeProps) {
  return (
    <Shape {...STAY_PUT} {...props} _style={extendStyle(STAY_PUT, props)} />
  )
}
