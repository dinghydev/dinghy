import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10060_ROLLER_LEVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10060;points=[[1,0.72,0],[1,1,0]]',
  },
  _width: 62.6,
  _height: 35.38,
}

export function X10060RollerLever(props: NodeProps) {
  return (
    <Shape
      {...X10060_ROLLER_LEVER}
      {...props}
      _style={extendStyle(X10060_ROLLER_LEVER, props)}
    />
  )
}
