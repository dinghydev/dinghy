import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BOTTOM_NAVIGATION_2 = {
  _style: {
    entity:
      'dashed=0;align=center;fontSize=12;shape=rect;fillColor=#00796B;strokeColor=none;shadow=0;hachureGap=4;pointerEvents=0;fontFamily=Helvetica;',
  },
  _width: 358,
  _height: 48,
}

export function BottomNavigation2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BOTTOM_NAVIGATION_2)} />
}
