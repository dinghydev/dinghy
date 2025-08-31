import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TIME_CLOCKS = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.time_clocks;',
  _width: 28.000000000000004,
  _height: 28.000000000000004,
}

export function TimeClocks(props: DiagramNodeProps) {
  return (
    <Shape
      {...TIME_CLOCKS}
      {...props}
      _style={extendStyle(TIME_CLOCKS, props)}
    />
  )
}
