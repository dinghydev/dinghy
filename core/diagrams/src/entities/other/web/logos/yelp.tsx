import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const YELP = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.yelp;fillColor=#C41200;strokeColor=none',
  },
  _original_width: 63.400000000000006,
  _original_height: 83,
}

export function Yelp(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, YELP)} />
}
