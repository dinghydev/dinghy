import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RJ45_SFP_ALT = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.rj45_sfp_alt;',
  _width: 5,
  _height: 4,
}

export function Rj45SfpAlt(props: DiagramNodeProps) {
  return <Shape {...RJ45_SFP_ALT} {...props} />
}
