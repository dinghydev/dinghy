import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NAVIGATION_BAR_LANDSCAPE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.android.navigation_bar_1_landscape;fillColor=#1A1A1A;strokeColor=#999999;sketch=0;',
  },
  _original_width: 320,
  _original_height: 30,
}

export function NavigationBarLandscape(props: DiagramNodeProps) {
  return (
    <Shape
      {...NAVIGATION_BAR_LANDSCAPE}
      {...props}
      _style={extendStyle(NAVIGATION_BAR_LANDSCAPE, props)}
    />
  )
}
