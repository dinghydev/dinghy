import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON_PLACEHOLDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.graphics.simpleIcon;strokeColor=#999999;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function IconPlaceholder(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON_PLACEHOLDER)} />
}
