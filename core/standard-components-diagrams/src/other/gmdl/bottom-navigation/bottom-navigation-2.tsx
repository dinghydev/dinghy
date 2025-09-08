import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BOTTOM_NAVIGATION_2 = {
  _style: {
    entity:
      'dashed=0;align=center;fontSize=12;shape=rect;fillColor=#00796B;strokeColor=none;shadow=0;hachureGap=4;pointerEvents=0;fontFamily=Helvetica;',
  },
  _original_width: 358,
  _original_height: 48,
}

export function BottomNavigation2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BOTTOM_NAVIGATION_2}
      {...props}
      _style={extendStyle(BOTTOM_NAVIGATION_2, props)}
    />
  )
}
