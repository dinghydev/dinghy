import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LC_SFP = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.lc_sfp;',
  _width: 17,
  _height: 6,
}

export function LcSfp(props: DiagramNodeProps) {
  return <Shape {...LC_SFP} {...props} />
}
