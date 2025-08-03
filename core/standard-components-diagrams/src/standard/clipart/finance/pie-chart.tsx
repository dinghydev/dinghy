import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PIE_CHART = {
  _style:
    'image;html=1;image=img/lib/clip_art/finance/Pie_Chart_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function PieChart(props: DiagramNodeProps) {
  return <Shape {...PIE_CHART} {...props} />
}
