import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETSCALER_VPX = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.netscaler_vpx;',
  },
  _width: 97,
  _height: 36,
}

export function NetscalerVpx(props: NodeProps) {
  return (
    <Shape
      {...NETSCALER_VPX}
      {...props}
      _style={extendStyle(NETSCALER_VPX, props)}
    />
  )
}
