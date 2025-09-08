import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PIE_CHART = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/finance/Pie_Chart_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function PieChart(props: DiagramNodeProps) {
  return (
    <Shape {...PIE_CHART} {...props} _style={extendStyle(PIE_CHART, props)} />
  )
}
