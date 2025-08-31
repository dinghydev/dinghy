import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLOGGER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.blogger;fillColor=#F66C2A;strokeColor=none',
  },
  _width: 58,
  _height: 58.2,
}

export function Blogger(props: DiagramNodeProps) {
  return <Shape {...BLOGGER} {...props} _style={extendStyle(BLOGGER, props)} />
}
