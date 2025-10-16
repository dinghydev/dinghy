import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SYNAPSE_ANALYTICS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_Synapse_Analytics.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 69,
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
