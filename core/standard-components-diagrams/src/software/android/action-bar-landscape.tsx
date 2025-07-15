import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTION_BAR_LANDSCAPE = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.action_bar_landscape;fillColor=#1A1A1A;strokeColor=#c0c0c0;strokeWidth=2;fontColor=#FFFFFF;whiteSpace=wrap;',
  _width: 320,
  _height: 30,
}

export function ActionBarLandscape(props: DiagramNodeProps) {
  return <Shape {...ACTION_BAR_LANDSCAPE} {...props} />
}
