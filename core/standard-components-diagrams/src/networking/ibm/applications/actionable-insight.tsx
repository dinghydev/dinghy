import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTIONABLE_INSIGHT = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/applications/actionable_insight.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ActionableInsight(props: DiagramNodeProps) {
  return <Shape {...ACTIONABLE_INSIGHT} {...props} />
}
