import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POWER_DISTRIBUTION_UNIT = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/power_distribution_unit_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function PowerDistributionUnit(props: NodeProps) {
  return (
    <Shape
      {...POWER_DISTRIBUTION_UNIT}
      {...props}
      _style={extendStyle(POWER_DISTRIBUTION_UNIT, props)}
    />
  )
}
