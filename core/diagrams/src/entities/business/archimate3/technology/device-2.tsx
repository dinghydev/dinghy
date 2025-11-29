import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEVICE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.device;',
  },
  _width: 70,
  _height: 35,
}

export function Device2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEVICE_2)} />
}
