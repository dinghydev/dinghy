import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARUBA_9004_DUAL_RACKMOUNT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_9004_dual_rackmount;',
  },
  _width: 142,
  _height: 15,
}

export function Aruba9004DualRackmount(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARUBA_9004_DUAL_RACKMOUNT}
      {...props}
      _style={extendStyle(ARUBA_9004_DUAL_RACKMOUNT, props)}
    />
  )
}
