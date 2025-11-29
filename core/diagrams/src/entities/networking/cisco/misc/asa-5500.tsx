import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASA_5500 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.asa_5500;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 59,
  _original_height: 67,
}

export function Asa5500(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ASA_5500)} />
}
