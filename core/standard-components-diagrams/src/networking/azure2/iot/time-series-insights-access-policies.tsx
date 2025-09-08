import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TIME_SERIES_INSIGHTS_ACCESS_POLICIES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/internet_of_things/Time_Series_Insights_Access_Policies.svg;strokeColor=none;',
  },
  _original_width: 42,
  _original_height: 68,
}

export function TimeSeriesInsightsAccessPolicies(props: DiagramNodeProps) {
  return (
    <Shape
      {...TIME_SERIES_INSIGHTS_ACCESS_POLICIES}
      {...props}
      _style={extendStyle(TIME_SERIES_INSIGHTS_ACCESS_POLICIES, props)}
    />
  )
}
