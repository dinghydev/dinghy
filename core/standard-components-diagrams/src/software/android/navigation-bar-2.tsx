import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NAVIGATION_BAR_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.android.navigation_bar_2;fillColor=#1A1A1A;strokeColor=#999999;sketch=0;',
  },
  _width: 185,
  _height: 30,
}

export function NavigationBar2(props: DiagramNodeProps) {
  return (
    <Shape
      {...NAVIGATION_BAR_2}
      {...props}
      _style={extendStyle(NAVIGATION_BAR_2, props)}
    />
  )
}
