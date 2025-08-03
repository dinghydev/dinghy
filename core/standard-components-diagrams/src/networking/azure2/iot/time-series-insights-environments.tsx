import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TIME_SERIES_INSIGHTS_ENVIRONMENTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Time_Series_Insights_Environments.svg;strokeColor=none;',
  _width: 67,
  _height: 68,
}

export function TimeSeriesInsightsEnvironments(props: DiagramNodeProps) {
  return <Shape {...TIME_SERIES_INSIGHTS_ENVIRONMENTS} {...props} />
}
