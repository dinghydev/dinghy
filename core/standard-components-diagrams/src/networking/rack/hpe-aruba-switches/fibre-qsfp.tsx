import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIBRE_QSFP = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.fibre_qsfp;',
  },
  _original_width: 20,
  _original_height: 5.7,
}

export function FibreQsfp(props: DiagramNodeProps) {
  return (
    <Shape {...FIBRE_QSFP} {...props} _style={extendStyle(FIBRE_QSFP, props)} />
  )
}
