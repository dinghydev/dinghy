import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TIME_SERIES_INSIGHTS_ENVIRONMENTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Time_Series_Insights_environments.svg;strokeColor=none;',
  },
  _original_width: 49,
  _original_height: 50,
}

export function TimeSeriesInsightsEnvironments(props: DiagramNodeProps) {
  return (
    <Shape
      {...TIME_SERIES_INSIGHTS_ENVIRONMENTS}
      {...props}
      _style={extendStyle(TIME_SERIES_INSIGHTS_ENVIRONMENTS, props)}
    />
  )
}
