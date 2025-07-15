import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOURCE_SQUARE = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.source;aspect=fixed;points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0]];elSignalType=square;',
  _width: 60,
  _height: 60,
}

export function SourceSquare(props: DiagramNodeProps) {
  return <Shape {...SOURCE_SQUARE} {...props} />
}
