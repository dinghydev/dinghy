import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLOGMARKS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.blogmarks;gradientColor=#DFDEDE',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Blogmarks(props: DiagramNodeProps) {
  return (
    <Shape {...BLOGMARKS} {...props} _style={extendStyle(BLOGMARKS, props)} />
  )
}
