import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTION_BAR_BRIGHT = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.action_bar;fillColor=#E6E6E6;strokeColor=#c0c0c0;strokeWidth=2;whiteSpace=wrap;',
  _width: 185,
  _height: 30,
}

export function ActionBarBright(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTION_BAR_BRIGHT}
      {...props}
      _style={extendStyle(ACTION_BAR_BRIGHT, props)}
    />
  )
}
