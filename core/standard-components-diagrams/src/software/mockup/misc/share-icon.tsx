import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHARE_ICON = {
  _style: {
    entity:
      'strokeColor=#999999;verticalLabelPosition=bottom;shadow=0;dashed=0;verticalAlign=top;strokeWidth=2;html=1;shape=mxgraph.mockup.misc.shareIcon;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ShareIcon(props: DiagramNodeProps) {
  return (
    <Shape {...SHARE_ICON} {...props} _style={extendStyle(SHARE_ICON, props)} />
  )
}
