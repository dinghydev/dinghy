import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIGNAL_GENERATOR = {
  _style: {
    entity:
      'perimeter=ellipsePerimeter;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.instruments.signal_generator;',
  },
  _original_width: 90,
  _original_height: 90,
}

export function SignalGenerator(props: DiagramNodeProps) {
  return (
    <Shape
      {...SIGNAL_GENERATOR}
      {...props}
      _style={extendStyle(SIGNAL_GENERATOR, props)}
    />
  )
}
