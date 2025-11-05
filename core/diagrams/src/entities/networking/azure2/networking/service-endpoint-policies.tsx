import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVICE_ENDPOINT_POLICIES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Service_Endpoint_Policies.svg;strokeColor=none;',
  },
  _original_width: 62,
  _original_height: 64,
}

export function ServiceEndpointPolicies(props: NodeProps) {
  return (
    <Shape
      {...SERVICE_ENDPOINT_POLICIES}
      {...props}
      _style={extendStyle(SERVICE_ENDPOINT_POLICIES, props)}
    />
  )
}
