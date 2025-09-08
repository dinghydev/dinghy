import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RJ45_SFP_ALT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.rj45_sfp_alt;',
  },
  _original_width: 5,
  _original_height: 4,
}

export function Rj45SfpAlt(props: DiagramNodeProps) {
  return (
    <Shape
      {...RJ45_SFP_ALT}
      {...props}
      _style={extendStyle(RJ45_SFP_ALT, props)}
    />
  )
}
