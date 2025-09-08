import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TIME_SERIES_INSIGHTS_ENVIRONMENTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Time_Series_Insights_Environments.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 68,
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
