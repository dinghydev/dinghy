import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETSCALER_VPX = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.netscaler_vpx;',
  },
  _original_width: 97,
  _original_height: 36,
}

export function NetscalerVpx(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETSCALER_VPX}
      {...props}
      _style={extendStyle(NETSCALER_VPX, props)}
    />
  )
}
