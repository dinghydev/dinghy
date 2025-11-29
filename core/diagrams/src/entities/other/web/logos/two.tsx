import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TWO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.two;fillColor=#FF6D00;strokeColor=none',
  },
  _width: 75.4,
  _height: 20,
}

export function Two(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TWO)} />
}
