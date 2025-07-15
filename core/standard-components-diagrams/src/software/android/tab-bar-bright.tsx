import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TAB_BAR_BRIGHT = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.rrect;rSize=0;fillColor=#eeeeee;strokeColor=none;',
  _width: 185,
  _height: 30,
}

export function TabBarBright(props: DiagramNodeProps) {
  return <Shape {...TAB_BAR_BRIGHT} {...props} />
}
