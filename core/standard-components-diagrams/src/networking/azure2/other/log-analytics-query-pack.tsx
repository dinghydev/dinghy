import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOG_ANALYTICS_QUERY_PACK = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Log_Analytics_Query_Pack.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
