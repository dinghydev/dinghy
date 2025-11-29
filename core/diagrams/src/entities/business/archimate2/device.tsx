import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEVICE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.tech;techType=device',
  },
  _width: 100,
  _height: 75,
}

export function Device(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEVICE)} />
}
