import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_OPERATOR_5G_CORE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/hybrid_multicloud/Azure_Operator_5G_Core.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 45.32,
}

export function AzureOperator5gCore(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_OPERATOR_5G_CORE}
      {...props}
      _style={extendStyle(AZURE_OPERATOR_5G_CORE, props)}
    />
  )
}
