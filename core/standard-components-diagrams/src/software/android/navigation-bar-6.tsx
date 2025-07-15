import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NAVIGATION_BAR_6 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.android.navigation_bar_6;fillColor=#1A1A1A;strokeColor=#999999;sketch=0;',
  _width: 185,
  _height: 30,
}

export function NavigationBar6(props: DiagramNodeProps) {
  return <Shape {...NAVIGATION_BAR_6} {...props} />
}
