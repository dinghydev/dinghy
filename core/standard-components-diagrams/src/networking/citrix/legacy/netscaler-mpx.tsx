import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETSCALER_MPX = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.netscaler_mpx;',
  _width: 100,
  _height: 39,
}

export function NetscalerMpx(props: DiagramNodeProps) {
  return <Shape {...NETSCALER_MPX} {...props} />
}
