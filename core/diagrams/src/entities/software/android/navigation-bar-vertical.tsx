import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NAVIGATION_BAR_VERTICAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.android.navigation_bar_1_vertical;fillColor=#1A1A1A;strokeColor=#999999;sketch=0;',
  },
  _width: 30,
  _height: 320,
}

export function NavigationBarVertical(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, NAVIGATION_BAR_VERTICAL)} />
  )
}
