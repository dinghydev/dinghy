import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WIRELESS = {
  _style: {
    entity:
      'shape=mxgraph.cisco.wireless.wireless;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 37,
  _height: 67,
}

export function Wireless(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WIRELESS)} />
}
