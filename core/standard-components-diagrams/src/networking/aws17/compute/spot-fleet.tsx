import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPOT_FLEET = {
  _style: 'rounded=1;fillColor=none;gradientColor=none;arcSize=10;dashed=1;',
  _width: 0,
  _height: 230,
}

export function SpotFleet(props: DiagramNodeProps) {
  return <Shape {...SPOT_FLEET} {...props} />
}
