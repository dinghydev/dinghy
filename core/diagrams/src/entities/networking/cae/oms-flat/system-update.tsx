import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SYSTEM_UPDATE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.system_update',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SystemUpdate(props: NodeProps) {
  return (
    <Shape
      {...SYSTEM_UPDATE}
      {...props}
      _style={extendStyle(SYSTEM_UPDATE, props)}
    />
  )
}
