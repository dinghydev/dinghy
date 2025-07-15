import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETSCALER_VPX = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.netscaler_vpx;',
  _width: 97,
  _height: 36,
}

export function NetscalerVpx(props: DiagramNodeProps) {
  return <Shape {...NETSCALER_VPX} {...props} />
}
