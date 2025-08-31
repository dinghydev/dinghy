import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MENU_BAR = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.rrect;rSize=0;strokeColor=#888888;fillColor=#444444;',
  _width: 0,
  _height: 50,
}

export function MenuBar(props: DiagramNodeProps) {
  return (
    <Shape {...MENU_BAR} {...props} _style={extendStyle(MENU_BAR, props)} />
  )
}
