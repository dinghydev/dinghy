import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APPLE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.apple;fillColor=#807E7E;gradientColor=#1B1C1C',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Apple(props: DiagramNodeProps) {
  return <Shape {...APPLE} {...props} _style={extendStyle(APPLE, props)} />
}
