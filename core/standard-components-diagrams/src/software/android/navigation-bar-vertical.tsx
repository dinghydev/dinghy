import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NAVIGATION_BAR_VERTICAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.android.navigation_bar_1_vertical;fillColor=#1A1A1A;strokeColor=#999999;sketch=0;',
  },
  _width: 30,
  _height: 320,
}

export function NavigationBarVertical(props: DiagramNodeProps) {
  return (
    <Shape
      {...NAVIGATION_BAR_VERTICAL}
      {...props}
      _style={extendStyle(NAVIGATION_BAR_VERTICAL, props)}
    />
  )
}
