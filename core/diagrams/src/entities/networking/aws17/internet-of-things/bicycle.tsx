import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BICYCLE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.bicycle;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 79.5,
  _original_height: 79.5,
}

export function Bicycle(props: DiagramNodeProps) {
  return <Shape {...BICYCLE} {...props} _style={extendStyle(BICYCLE, props)} />
}
