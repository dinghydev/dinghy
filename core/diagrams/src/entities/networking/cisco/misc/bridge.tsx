import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BRIDGE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.bridge;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 74,
  _original_height: 56,
}

export function Bridge(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BRIDGE)} />
}
