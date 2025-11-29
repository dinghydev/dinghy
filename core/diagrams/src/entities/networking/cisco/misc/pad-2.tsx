import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PAD_2 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.pad_2;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 85,
  _height: 48,
}

export function Pad2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PAD_2)} />
}
