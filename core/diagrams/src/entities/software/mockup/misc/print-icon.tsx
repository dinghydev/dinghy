import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRINT_ICON = {
  _style: {
    entity:
      'strokeColor=#999999;verticalLabelPosition=bottom;shadow=0;dashed=0;verticalAlign=top;strokeWidth=2;html=1;shape=mxgraph.mockup.misc.printIcon;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function PrintIcon(props: NodeProps) {
  return (
    <Shape {...PRINT_ICON} {...props} _style={extendStyle(PRINT_ICON, props)} />
  )
}
