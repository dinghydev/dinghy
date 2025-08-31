import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QUICKSCROLL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.quickscroll2;dy=0.5;fillColor=#33b5e5;strokeColor=#66D5F5;',
  },
  _width: 58,
  _height: 320,
}

export function Quickscroll(props: DiagramNodeProps) {
  return (
    <Shape
      {...QUICKSCROLL}
      {...props}
      _style={extendStyle(QUICKSCROLL, props)}
    />
  )
}
