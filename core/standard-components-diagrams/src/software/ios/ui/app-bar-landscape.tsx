import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APP_BAR_LANDSCAPE = {
  _style: {
    entity:
      'html=1;strokeWidth=1;shadow=0;dashed=0;shape=mxgraph.ios7ui.appBar;fillColor=#ffffff;gradientColor=none;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _original_width: 280,
  _original_height: 15,
}

export function AppBarLandscape(props: DiagramNodeProps) {
  return (
    <Shape
      {...APP_BAR_LANDSCAPE}
      {...props}
      _style={extendStyle(APP_BAR_LANDSCAPE, props)}
    />
  )
}
