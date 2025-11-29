import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LC_SFP = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.lc_sfp;',
  },
  _width: 17,
  _height: 6,
}

export function LcSfp(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LC_SFP)} />
}
