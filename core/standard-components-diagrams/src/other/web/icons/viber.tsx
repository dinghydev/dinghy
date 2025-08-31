import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIBER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.viber;fillColor=#9964C4;gradientColor=#52366B',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Viber(props: DiagramNodeProps) {
  return <Shape {...VIBER} {...props} _style={extendStyle(VIBER, props)} />
}
