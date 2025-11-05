import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TUMBLR = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.tumblr;fillColor=#36465D;strokeColor=none',
  },
  _width: 40.6,
  _height: 65.2,
}

export function Tumblr(props: NodeProps) {
  return <Shape {...TUMBLR} {...props} _style={extendStyle(TUMBLR, props)} />
}
