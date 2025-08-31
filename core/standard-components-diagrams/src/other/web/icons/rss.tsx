import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RSS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.rss;fillColor=#FDE532;gradientColor=#F4600D',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Rss(props: DiagramNodeProps) {
  return <Shape {...RSS} {...props} _style={extendStyle(RSS, props)} />
}
