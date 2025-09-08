import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DZONE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.dzone;gradientColor=#DFDEDE',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Dzone(props: DiagramNodeProps) {
  return <Shape {...DZONE} {...props} _style={extendStyle(DZONE, props)} />
}
