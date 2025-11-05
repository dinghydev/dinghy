import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETSCALER_SDX = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.netscaler_sdx;',
  },
  _width: 100,
  _height: 47.5,
}

export function NetscalerSdx(props: NodeProps) {
  return (
    <Shape
      {...NETSCALER_SDX}
      {...props}
      _style={extendStyle(NETSCALER_SDX, props)}
    />
  )
}
