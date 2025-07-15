import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POWER_DISTRIBUTION_UNIT = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/power_distribution_unit_128x128.png',
  _width: 80,
  _height: 80,
}

export function PowerDistributionUnit(props: DiagramNodeProps) {
  return <Shape {...POWER_DISTRIBUTION_UNIT} {...props} />
}
