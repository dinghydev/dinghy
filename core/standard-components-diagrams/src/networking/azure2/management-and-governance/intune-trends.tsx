import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTUNE_TRENDS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Intune_Trends.svg;strokeColor=none;',
  _width: 56.8,
  _height: 68,
}

export function IntuneTrends(props: DiagramNodeProps) {
  return <Shape {...INTUNE_TRENDS} {...props} />
}
