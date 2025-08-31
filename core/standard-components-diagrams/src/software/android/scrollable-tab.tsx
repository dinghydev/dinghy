import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCROLLABLE_TAB = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.rrect;rSize=0;fillColor=#444444;strokeColor=none;',
  _width: 0,
  _height: 15,
}

export function ScrollableTab(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCROLLABLE_TAB}
      {...props}
      _style={extendStyle(SCROLLABLE_TAB, props)}
    />
  )
}
