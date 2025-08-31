import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BING = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.bing;fillColor=#0A776E;gradientColor=#053D39',
  _width: 102.4,
  _height: 102.4,
}

export function Bing(props: DiagramNodeProps) {
  return <Shape {...BING} {...props} _style={extendStyle(BING, props)} />
}
