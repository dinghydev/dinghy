import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPOT_FLEET_2 = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.spot_instance;fillColor=#F58534;strokeColor=none;gradientColor=none;',
  },
  _width: 1,
  _height: 230,
}

export function SpotFleet2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPOT_FLEET_2}
      {...props}
      _style={extendStyle(SPOT_FLEET_2, props)}
    />
  )
}
