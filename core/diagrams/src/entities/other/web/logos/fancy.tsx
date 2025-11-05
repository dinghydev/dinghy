import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FANCY = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.fancy;fillColor=#6DB3E3',
  },
  _width: 39.2,
  _height: 79,
}

export function Fancy(props: NodeProps) {
  return <Shape {...FANCY} {...props} _style={extendStyle(FANCY, props)} />
}
