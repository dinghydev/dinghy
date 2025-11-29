import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPRAY_NOZZLE = {
  _style: {
    entity:
      'shape=mxgraph.pid.feeders.spray_nozzle;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 50,
}

export function SprayNozzle(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SPRAY_NOZZLE)} />
}
