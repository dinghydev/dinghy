import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION_INSIGHTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Application_Insights.svg;strokeColor=none;',
  },
  _width: 32,
  _height: 50,
}

export function ApplicationInsights(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, APPLICATION_INSIGHTS)} />
}
