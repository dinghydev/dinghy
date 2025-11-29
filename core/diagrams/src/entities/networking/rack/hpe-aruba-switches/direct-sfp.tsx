import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIRECT_SFP = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.direct_sfp;',
  },
  _width: 11,
  _height: 8,
}

export function DirectSfp(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DIRECT_SFP)} />
}
