import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOG_ANALYTICS_QUERY_PACK = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Log_Analytics_Query_Pack.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function LogAnalyticsQueryPack(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOG_ANALYTICS_QUERY_PACK}
      {...props}
      _style={extendStyle(LOG_ANALYTICS_QUERY_PACK, props)}
    />
  )
}
