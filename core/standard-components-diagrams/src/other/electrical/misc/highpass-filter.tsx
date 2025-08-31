import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HIGHPASS_FILTER = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.highpass_filter;',
  _width: 52,
  _height: 46,
}

export function HighpassFilter(props: DiagramNodeProps) {
  return (
    <Shape
      {...HIGHPASS_FILTER}
      {...props}
      _style={extendStyle(HIGHPASS_FILTER, props)}
    />
  )
}
