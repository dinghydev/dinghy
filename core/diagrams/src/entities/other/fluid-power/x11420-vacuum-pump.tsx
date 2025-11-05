import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11420_VACUUM_PUMP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11420;points=[[0.665,0,0],[0.665,1,0]]',
  },
  _original_width: 83.5,
  _original_height: 92.9,
}

export function X11420VacuumPump(props: NodeProps) {
  return (
    <Shape
      {...X11420_VACUUM_PUMP}
      {...props}
      _style={extendStyle(X11420_VACUUM_PUMP, props)}
    />
  )
}
