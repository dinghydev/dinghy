import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPOT_FLEET = {
  _style: {
    entity: 'rounded=1;fillColor=none;gradientColor=none;arcSize=10;dashed=1;',
  },
  _width: 0,
  _height: 230,
}

export function SpotFleet(props: DiagramNodeProps) {
  return (
    <Shape {...SPOT_FLEET} {...props} _style={extendStyle(SPOT_FLEET, props)} />
  )
}
