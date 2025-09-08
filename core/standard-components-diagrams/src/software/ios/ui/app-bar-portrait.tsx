import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APP_BAR_PORTRAIT = {
  _style: {
    entity:
      'html=1;strokeWidth=1;shadow=0;dashed=0;shape=mxgraph.ios7ui.appBar;fillColor=#ffffff;gradientColor=none;sketch=0;hachureGap=4;pointerEvents=0;',
  },
  _original_width: 175,
  _original_height: 15,
}

export function AppBarPortrait(props: DiagramNodeProps) {
  return (
    <Shape
      {...APP_BAR_PORTRAIT}
      {...props}
      _style={extendStyle(APP_BAR_PORTRAIT, props)}
    />
  )
}
