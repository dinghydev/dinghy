import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RJ45_SFP = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.rj45_sfp;',
  _width: 8,
  _height: 6,
}

export function Rj45Sfp(props: DiagramNodeProps) {
  return (
    <Shape {...RJ45_SFP} {...props} _style={extendStyle(RJ45_SFP, props)} />
  )
}
