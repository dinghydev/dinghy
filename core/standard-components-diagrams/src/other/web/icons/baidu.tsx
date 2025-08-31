import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAIDU = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.baidu;fillColor=#738FE8;gradientColor=#1F2470',
  _width: 102.4,
  _height: 102.4,
}

export function Baidu(props: DiagramNodeProps) {
  return <Shape {...BAIDU} {...props} _style={extendStyle(BAIDU, props)} />
}
