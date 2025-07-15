import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_OPERATOR_5G_CORE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/hybrid_multicloud/Azure_Operator_5G_Core.svg;',
  _width: 68,
  _height: 45.32,
}

export function AzureOperator5gCore(props: DiagramNodeProps) {
  return <Shape {...AZURE_OPERATOR_5G_CORE} {...props} />
}
