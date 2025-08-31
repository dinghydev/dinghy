import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SYNAPSE_ANALYTICS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Azure_Synapse_Analytics.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 69,
}

export function SynapseAnalytics(props: DiagramNodeProps) {
  return (
    <Shape
      {...SYNAPSE_ANALYTICS}
      {...props}
      _style={extendStyle(SYNAPSE_ANALYTICS, props)}
    />
  )
}
