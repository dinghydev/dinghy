import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIVERTER_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.diverter_valve;pointerEvents=1;',
  },
  _width: 50,
  _height: 35,
}

export function DiverterValve(props: NodeProps) {
  return (
    <Shape
      {...DIVERTER_VALVE}
      {...props}
      _style={extendStyle(DIVERTER_VALVE, props)}
    />
  )
}
