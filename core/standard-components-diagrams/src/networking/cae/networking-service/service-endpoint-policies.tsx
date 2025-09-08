import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVICE_ENDPOINT_POLICIES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Service_Endpoint_Policies.svg;strokeColor=none;',
  },
  _original_width: 49,
  _original_height: 50,
}

export function ServiceEndpointPolicies(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_ENDPOINT_POLICIES}
      {...props}
      _style={extendStyle(SERVICE_ENDPOINT_POLICIES, props)}
    />
  )
}
