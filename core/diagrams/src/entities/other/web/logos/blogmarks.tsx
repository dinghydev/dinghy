import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLOGMARKS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.blogmarks',
  },
  _width: 37.6,
  _height: 64.4,
}

export function Blogmarks(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BLOGMARKS)} />
}
