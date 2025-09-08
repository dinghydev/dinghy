import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTION_BAR_LANDSCAPE_BRIGHT = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.action_bar_landscape;fillColor=#E6E6E6;strokeColor=#c0c0c0;strokeWidth=2;whiteSpace=wrap;',
  },
  _original_width: 320,
  _original_height: 30,
}

export function ActionBarLandscapeBright(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTION_BAR_LANDSCAPE_BRIGHT}
      {...props}
      _style={extendStyle(ACTION_BAR_LANDSCAPE_BRIGHT, props)}
    />
  )
}
