import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROTAMETER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.rotameter;',
  },
  _width: 75,
  _height: 50,
}

export function Rotameter(props: NodeProps) {
  return (
    <Shape {...ROTAMETER} {...props} _style={extendStyle(ROTAMETER, props)} />
  )
}
