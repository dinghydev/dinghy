import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const YAMMER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.yammer;fillColor=#00AFE0;gradientColor=#005F7A',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Yammer(props: DiagramNodeProps) {
  return <Shape {...YAMMER} {...props} _style={extendStyle(YAMMER, props)} />
}
