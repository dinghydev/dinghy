import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ANTENNA_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.aerial_-_antenna_2;',
  },
  _width: 79,
  _height: 100,
}

export function Antenna2(props: DiagramNodeProps) {
  return (
    <Shape {...ANTENNA_2} {...props} _style={extendStyle(ANTENNA_2, props)} />
  )
}
