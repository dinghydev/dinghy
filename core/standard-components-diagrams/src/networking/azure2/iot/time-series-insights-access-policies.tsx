import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TIME_SERIES_INSIGHTS_ACCESS_POLICIES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/internet_of_things/Time_Series_Insights_Access_Policies.svg;',
  _width: 42,
  _height: 68,
}

export function TimeSeriesInsightsAccessPolicies(props: DiagramNodeProps) {
  return <Shape {...TIME_SERIES_INSIGHTS_ACCESS_POLICIES} {...props} />
}
