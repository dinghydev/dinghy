import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICS = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.ics;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 70,
  _original_height: 77,
}

export function Ics(props: NodeProps) {
  return <Shape {...ICS} {...props} _style={extendStyle(ICS, props)} />
}
