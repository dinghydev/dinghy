import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCATION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;shape=mxgraph.archimate3.application;appType=location;archiType=square;fillColor=#efd1e4;',
  },
  _width: 150,
  _height: 75,
}

export function Location(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOCATION)} />
}
