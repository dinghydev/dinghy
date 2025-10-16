import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PINPOINT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.pinpoint;fillColor=#AD688B;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 87,
}

export function Pinpoint(props: DiagramNodeProps) {
  return (
    <Shape {...PINPOINT} {...props} _style={extendStyle(PINPOINT, props)} />
  )
}
