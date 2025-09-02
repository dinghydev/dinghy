import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPOT_FLEET = {
  _style: {
    entity: 'rounded=1;fillColor=none;gradientColor=none;arcSize=10;dashed=1;',
  },
  _original_width: 0,
  _original_height: 230,
}

export function SpotFleet(props: DiagramNodeProps) {
  return (
    <Shape {...SPOT_FLEET} {...props} _style={extendStyle(SPOT_FLEET, props)} />
  )
}
