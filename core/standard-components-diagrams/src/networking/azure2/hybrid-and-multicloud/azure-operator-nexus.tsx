import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_OPERATOR_NEXUS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/hybrid_multicloud/Azure_Operator_Nexus.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
