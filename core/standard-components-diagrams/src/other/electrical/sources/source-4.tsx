import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOURCE_4 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.source;aspect=fixed;points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0]];elSignalType=none;elSourceType=dependent;',
  },
  _width: 60,
  _height: 60,
}

export function Source4(props: DiagramNodeProps) {
  return (
    <Shape {...SOURCE_4} {...props} _style={extendStyle(SOURCE_4, props)} />
  )
}
