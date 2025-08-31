import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const YOOLINK = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.yoolink',
  _width: 60,
  _height: 60,
}

export function Yoolink(props: DiagramNodeProps) {
  return <Shape {...YOOLINK} {...props} _style={extendStyle(YOOLINK, props)} />
}
