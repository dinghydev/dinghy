import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_OPERATOR_INSIGHTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/hybrid_multicloud/Azure_Operator_Insights.svg;',
  _width: 68,
  _height: 68,
}

export function AzureOperatorInsights(props: DiagramNodeProps) {
  return <Shape {...AZURE_OPERATOR_INSIGHTS} {...props} />
}
