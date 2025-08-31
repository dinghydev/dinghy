import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHARE_ICON = {
  _style:
    'strokeColor=#999999;verticalLabelPosition=bottom;shadow=0;dashed=0;verticalAlign=top;strokeWidth=2;html=1;shape=mxgraph.mockup.misc.shareIcon;',
  _width: 60,
  _height: 60,
}

export function ShareIcon(props: DiagramNodeProps) {
  return (
    <Shape {...SHARE_ICON} {...props} _style={extendStyle(SHARE_ICON, props)} />
  )
}
