import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIBRE_QSFP = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.fibre_qsfp;',
  },
  _width: 20,
  _height: 5.7,
}

export function FibreQsfp(props: DiagramNodeProps) {
  return (
    <Shape {...FIBRE_QSFP} {...props} _style={extendStyle(FIBRE_QSFP, props)} />
  )
}
