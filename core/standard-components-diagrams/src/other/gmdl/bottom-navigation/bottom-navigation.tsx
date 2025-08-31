import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOTTOM_NAVIGATION = {
  _style: {
    entity:
      'dashed=0;align=center;fontSize=12;shape=rect;fillColor=#ffffff;strokeColor=none;shadow=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 358,
  _height: 48,
}

export function BottomNavigation(props: DiagramNodeProps) {
  return (
    <Shape
      {...BOTTOM_NAVIGATION}
      {...props}
      _style={extendStyle(BOTTOM_NAVIGATION, props)}
    />
  )
}
