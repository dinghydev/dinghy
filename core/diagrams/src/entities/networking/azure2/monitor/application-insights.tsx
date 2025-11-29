import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION_INSIGHTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/Application_Insights.svg;strokeColor=none;',
  },
  _original_width: 44,
  _original_height: 63,
}

export function ApplicationInsights(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, APPLICATION_INSIGHTS)} />
}
