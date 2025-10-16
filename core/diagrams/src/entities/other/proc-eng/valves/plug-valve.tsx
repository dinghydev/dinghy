import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PLUG_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=plug',
  },
  _width: 100,
  _height: 60,
}

export function PlugValve(props: DiagramNodeProps) {
  return (
    <Shape {...PLUG_VALVE} {...props} _style={extendStyle(PLUG_VALVE, props)} />
  )
}
