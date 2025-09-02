import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTUNE_TRENDS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Intune_Trends.svg;strokeColor=none;',
  },
  _original_width: 56.8,
  _original_height: 68,
}

export function IntuneTrends(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTUNE_TRENDS}
      {...props}
      _style={extendStyle(INTUNE_TRENDS, props)}
    />
  )
}
