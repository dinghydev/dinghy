import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AZURE_OPERATOR_SERVICE_MANAGER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/hybrid_multicloud/Azure_Operator_Service_Manager.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function AzureOperatorServiceManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_OPERATOR_SERVICE_MANAGER}
      {...props}
      _style={extendStyle(AZURE_OPERATOR_SERVICE_MANAGER, props)}
    />
  )
}
