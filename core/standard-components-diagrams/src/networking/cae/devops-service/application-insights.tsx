import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_INSIGHTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Application_Insights.svg;strokeColor=none;',
  _width: 32,
  _height: 50,
}

export function ApplicationInsights(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_INSIGHTS}
      {...props}
      _style={extendStyle(APPLICATION_INSIGHTS, props)}
    />
  )
}
