import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UNAVAILABLE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.unavailable;',
  _width: 21,
  _height: 21,
}

export function Unavailable(props: DiagramNodeProps) {
  return (
    <Shape
      {...UNAVAILABLE}
      {...props}
      _style={extendStyle(UNAVAILABLE, props)}
    />
  )
}
