import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TIME_SERIES_INSIGHTS_EVENTS_SOURCES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Input.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function TimeSeriesInsightsEventsSources(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, TIME_SERIES_INSIGHTS_EVENTS_SOURCES)}
    />
  )
}
