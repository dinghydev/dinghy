import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BOTTOM_NAVIGATION_2 = {
  _style:
    'dashed=0;align=center;fontSize=12;shape=rect;fillColor=#00796B;strokeColor=none;shadow=0;hachureGap=4;pointerEvents=0;fontFamily=Helvetica;',
  _width: 358,
  _height: 48,
}

export function BottomNavigation2(props: DiagramNodeProps) {
  return <Shape {...BOTTOM_NAVIGATION_2} {...props} />
}
