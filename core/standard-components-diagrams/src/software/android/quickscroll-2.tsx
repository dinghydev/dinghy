import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QUICKSCROLL_2 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.quickscroll3;dy=0.5;fillColor=#33b5e5;strokeColor=#66D5F5;',
  _width: 6,
  _height: 320,
}

export function Quickscroll2(props: DiagramNodeProps) {
  return (
    <Shape
      {...QUICKSCROLL_2}
      {...props}
      _style={extendStyle(QUICKSCROLL_2, props)}
    />
  )
}
