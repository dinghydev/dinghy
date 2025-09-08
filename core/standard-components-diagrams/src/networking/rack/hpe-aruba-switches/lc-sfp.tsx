import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LC_SFP = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.lc_sfp;',
  },
  _original_width: 17,
  _original_height: 6,
}

export function LcSfp(props: DiagramNodeProps) {
  return <Shape {...LC_SFP} {...props} _style={extendStyle(LC_SFP, props)} />
}
