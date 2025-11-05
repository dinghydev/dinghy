import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLUME = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.flume;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Flume(props: NodeProps) {
  return <Shape {...FLUME} {...props} _style={extendStyle(FLUME, props)} />
}
