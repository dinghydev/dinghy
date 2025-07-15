import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SYNAPSE_ANALYTICS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Azure_Synapse_Analytics.svg;',
  _width: 60,
  _height: 69,
}

export function SynapseAnalytics(props: DiagramNodeProps) {
  return <Shape {...SYNAPSE_ANALYTICS} {...props} />
}
