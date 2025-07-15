import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIRECT_SFP = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.direct_sfp;',
  _width: 11,
  _height: 8,
}

export function DirectSfp(props: DiagramNodeProps) {
  return <Shape {...DIRECT_SFP} {...props} />
}
