import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AZURE_OPERATOR_NEXUS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/hybrid_multicloud/Azure_Operator_Nexus.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function AzureOperatorNexus(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_OPERATOR_NEXUS}
      {...props}
      _style={extendStyle(AZURE_OPERATOR_NEXUS, props)}
    />
  )
}
