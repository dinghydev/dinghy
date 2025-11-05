import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETSCALER_MPX = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.netscaler_mpx;',
  },
  _width: 100,
  _height: 39,
}

export function NetscalerMpx(props: NodeProps) {
  return (
    <Shape
      {...NETSCALER_MPX}
      {...props}
      _style={extendStyle(NETSCALER_MPX, props)}
    />
  )
}
