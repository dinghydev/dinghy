import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APPLICATION_INSIGHTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Application_Insights.svg;strokeColor=none;',
  },
  _original_width: 32,
  _original_height: 50,
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
