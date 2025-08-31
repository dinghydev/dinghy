import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOURCE_INVERSE_PULSE = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.source;aspect=fixed;points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0]];elSignalType=invPulse;',
  _width: 60,
  _height: 60,
}

export function SourceInversePulse(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOURCE_INVERSE_PULSE}
      {...props}
      _style={extendStyle(SOURCE_INVERSE_PULSE, props)}
    />
  )
}
