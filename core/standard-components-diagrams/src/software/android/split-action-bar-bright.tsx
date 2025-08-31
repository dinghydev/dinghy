import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPLIT_ACTION_BAR_BRIGHT = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.split_action_bar;fillColor=#E6E6E6;',
  },
  _width: 0,
  _height: 70,
}

export function SplitActionBarBright(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPLIT_ACTION_BAR_BRIGHT}
      {...props}
      _style={extendStyle(SPLIT_ACTION_BAR_BRIGHT, props)}
    />
  )
}
