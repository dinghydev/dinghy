import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_1000 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.cisco_1000;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 53,
  _original_height: 46,
}

export function Cisco1000(props: NodeProps) {
  return (
    <Shape {...CISCO_1000} {...props} _style={extendStyle(CISCO_1000, props)} />
  )
}
