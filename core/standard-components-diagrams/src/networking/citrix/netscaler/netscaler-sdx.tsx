import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETSCALER_SDX = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.netscaler_sdx;',
  _width: 50,
  _height: 41.225,
}

export function NetscalerSdx(props: DiagramNodeProps) {
  return <Shape {...NETSCALER_SDX} {...props} />
}
