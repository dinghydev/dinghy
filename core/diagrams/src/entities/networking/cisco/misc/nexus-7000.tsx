import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NEXUS_7000 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.nexus_7000;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 51,
  _original_height: 69,
}

export function Nexus7000(props: NodeProps) {
  return (
    <Shape {...NEXUS_7000} {...props} _style={extendStyle(NEXUS_7000, props)} />
  )
}
