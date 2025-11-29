import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTEGRATION_SERVICE_ENVIRONMENTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Integration_Service_Environments.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function IntegrationServiceEnvironments(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, INTEGRATION_SERVICE_ENVIRONMENTS)}
    />
  )
}
