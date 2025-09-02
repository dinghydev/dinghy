import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIRECT_SFP = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.direct_sfp;',
  },
  _original_width: 11,
  _original_height: 8,
}

export function DirectSfp(props: DiagramNodeProps) {
  return (
    <Shape {...DIRECT_SFP} {...props} _style={extendStyle(DIRECT_SFP, props)} />
  )
}
