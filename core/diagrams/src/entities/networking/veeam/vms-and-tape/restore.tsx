import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESTORE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.restore;pointerEvents=1;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function Restore(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RESTORE)} />
}
