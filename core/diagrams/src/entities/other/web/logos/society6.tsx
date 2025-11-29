import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SOCIETY6 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.society6;fillColor=#000000;strokeColor=none',
  },
  _width: 74.8,
  _height: 53,
}

export function Society6(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SOCIETY6)} />
}
