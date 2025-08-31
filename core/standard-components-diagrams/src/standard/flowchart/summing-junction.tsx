import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUMMING_JUNCTION = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.flowchart.or;',
  _width: 60,
  _height: 60,
}

export function SummingJunction(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUMMING_JUNCTION}
      {...props}
      _style={extendStyle(SUMMING_JUNCTION, props)}
    />
  )
}
