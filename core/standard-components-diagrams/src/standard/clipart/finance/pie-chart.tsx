import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PIE_CHART = {
  _style:
    'image;html=1;image=img/lib/clip_art/finance/Pie_Chart_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function PieChart(props: DiagramNodeProps) {
  return (
    <Shape {...PIE_CHART} {...props} _style={extendStyle(PIE_CHART, props)} />
  )
}
