import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EDIT_ICON = {
  _style: {
    entity:
      'strokeColor=#999999;verticalLabelPosition=bottom;shadow=0;dashed=0;verticalAlign=top;strokeWidth=2;html=1;shape=mxgraph.mockup.misc.editIcon;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function EditIcon(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EDIT_ICON)} />
}
