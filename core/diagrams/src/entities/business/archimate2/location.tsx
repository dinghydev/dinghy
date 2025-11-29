import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCATION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.location',
  },
  _width: 100,
  _height: 75,
}

export function Location(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOCATION)} />
}
