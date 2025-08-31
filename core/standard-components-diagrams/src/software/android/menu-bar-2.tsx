import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MENU_BAR_2 = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.rrect;rSize=0;strokeColor=#eeeeee;fillColor=#ffffff;gradientColor=none;',
  },
  _width: 0,
  _height: 50,
}

export function MenuBar2(props: DiagramNodeProps) {
  return (
    <Shape {...MENU_BAR_2} {...props} _style={extendStyle(MENU_BAR_2, props)} />
  )
}
