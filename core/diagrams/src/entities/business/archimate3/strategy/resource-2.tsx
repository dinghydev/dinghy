import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESOURCE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.resource;',
  },
  _width: 60,
  _height: 40,
}

export function Resource2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RESOURCE_2)} />
}
