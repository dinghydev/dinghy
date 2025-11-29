import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RJ45_SFP = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.rj45_sfp;',
  },
  _width: 8,
  _height: 6,
}

export function Rj45Sfp(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RJ45_SFP)} />
}
