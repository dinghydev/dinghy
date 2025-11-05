import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EBAY = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.ebay',
  },
  _width: 81.2,
  _height: 34.4,
}

export function Ebay(props: NodeProps) {
  return <Shape {...EBAY} {...props} _style={extendStyle(EBAY, props)} />
}
