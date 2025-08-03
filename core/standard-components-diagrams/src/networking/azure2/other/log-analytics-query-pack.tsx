import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOG_ANALYTICS_QUERY_PACK = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Log_Analytics_Query_Pack.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function LogAnalyticsQueryPack(props: DiagramNodeProps) {
  return <Shape {...LOG_ANALYTICS_QUERY_PACK} {...props} />
}
