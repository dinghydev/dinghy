import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SOURCE_3 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.source;aspect=fixed;points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0]];elSignalType=dc3;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Source3(props: DiagramNodeProps) {
  return (
    <Shape {...SOURCE_3} {...props} _style={extendStyle(SOURCE_3, props)} />
  )
}
