import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NAVIGATION_BAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.android.navigation_bar_1;fillColor=#1A1A1A;strokeColor=#999999;sketch=0;',
  },
  _width: 185,
  _height: 30,
}

export function NavigationBar(props: DiagramNodeProps) {
  return (
    <Shape
      {...NAVIGATION_BAR}
      {...props}
      _style={extendStyle(NAVIGATION_BAR, props)}
    />
  )
}
