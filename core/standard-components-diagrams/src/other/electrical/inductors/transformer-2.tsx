import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSFORMER_2 = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.electrical.signal_sources.current_source;',
  _width: 40,
  _height: 60,
}

export function Transformer2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRANSFORMER_2}
      {...props}
      _style={extendStyle(TRANSFORMER_2, props)}
    />
  )
}
