import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROTATION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;fillColor=strokeColor;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.electrical.rot_mech.rotation;',
  },
  _original_width: 69,
  _original_height: 54,
}

export function Rotation(props: NodeProps) {
  return (
    <Shape {...ROTATION} {...props} _style={extendStyle(ROTATION, props)} />
  )
}
