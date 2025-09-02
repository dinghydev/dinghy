import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOURCE_DC = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.source;aspect=fixed;points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0]];elSignalType=dc2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function SourceDc(props: DiagramNodeProps) {
  return (
    <Shape {...SOURCE_DC} {...props} _style={extendStyle(SOURCE_DC, props)} />
  )
}
