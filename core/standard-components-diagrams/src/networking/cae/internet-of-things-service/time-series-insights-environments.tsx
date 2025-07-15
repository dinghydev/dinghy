import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TIME_SERIES_INSIGHTS_ENVIRONMENTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Time_Series_Insights_environments.svg;',
  _width: 49,
  _height: 50,
}

export function TimeSeriesInsightsEnvironments(props: DiagramNodeProps) {
  return <Shape {...TIME_SERIES_INSIGHTS_ENVIRONMENTS} {...props} />
}
