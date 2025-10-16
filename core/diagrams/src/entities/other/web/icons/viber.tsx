import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIBER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.viber;fillColor=#9964C4;gradientColor=#52366B',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Viber(props: DiagramNodeProps) {
  return <Shape {...VIBER} {...props} _style={extendStyle(VIBER, props)} />
}
