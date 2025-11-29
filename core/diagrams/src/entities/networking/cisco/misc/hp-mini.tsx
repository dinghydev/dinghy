import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HP_MINI = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.hp_mini;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 50,
  _original_height: 54,
}

export function HpMini(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HP_MINI)} />
}
