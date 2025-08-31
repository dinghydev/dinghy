import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TIME_SERIES_INSIGHTS_EVENTS_SOURCES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Input.svg;strokeColor=none;',
  _width: 50,
  _height: 45,
}

export function TimeSeriesInsightsEventsSources(props: DiagramNodeProps) {
  return (
    <Shape
      {...TIME_SERIES_INSIGHTS_EVENTS_SOURCES}
      {...props}
      _style={extendStyle(TIME_SERIES_INSIGHTS_EVENTS_SOURCES, props)}
    />
  )
}
