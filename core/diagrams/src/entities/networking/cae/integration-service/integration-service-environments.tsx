import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTEGRATION_SERVICE_ENVIRONMENTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Integration_Service_Environments.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function IntegrationServiceEnvironments(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, INTEGRATION_SERVICE_ENVIRONMENTS)}
    />
  )
}
