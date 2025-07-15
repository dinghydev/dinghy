import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETSCALER_SDX = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.netscaler_sdx;',
  _width: 100,
  _height: 47.5,
}

export function NetscalerSdx(props: DiagramNodeProps) {
  return <Shape {...NETSCALER_SDX} {...props} />
}
