import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCATION_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;shape=mxgraph.archimate3.locationIcon;fillColor=#efd1e4;aspect=fixed;',
  },
  _width: 35,
  _height: 50,
}

export function Location2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOCATION_2)} />
}
