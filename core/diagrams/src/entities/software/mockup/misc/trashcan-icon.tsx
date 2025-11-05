import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRASHCAN_ICON = {
  _style: {
    entity:
      'strokeColor=#999999;verticalLabelPosition=bottom;shadow=0;dashed=0;verticalAlign=top;strokeWidth=2;html=1;shape=mxgraph.mockup.misc.trashcanIcon;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function TrashcanIcon(props: NodeProps) {
  return (
    <Shape
      {...TRASHCAN_ICON}
      {...props}
      _style={extendStyle(TRASHCAN_ICON, props)}
    />
  )
}
