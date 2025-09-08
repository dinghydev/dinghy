import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ANTENNA = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.aerial_-_antenna_1;',
  },
  _original_width: 80,
  _original_height: 100,
}

export function Antenna(props: DiagramNodeProps) {
  return <Shape {...ANTENNA} {...props} _style={extendStyle(ANTENNA, props)} />
}
