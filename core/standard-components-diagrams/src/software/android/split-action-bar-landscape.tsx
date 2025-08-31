import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPLIT_ACTION_BAR_LANDSCAPE = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.split_action_bar_landscape;fillColor=#1A1A1A;',
  _width: 0,
  _height: 70,
}

export function SplitActionBarLandscape(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPLIT_ACTION_BAR_LANDSCAPE}
      {...props}
      _style={extendStyle(SPLIT_ACTION_BAR_LANDSCAPE, props)}
    />
  )
}
