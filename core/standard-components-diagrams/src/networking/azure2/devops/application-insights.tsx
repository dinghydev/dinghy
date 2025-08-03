import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_INSIGHTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/Application_Insights.svg;strokeColor=none;',
  _width: 44,
  _height: 63,
}

export function ApplicationInsights(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_INSIGHTS} {...props} />
}
