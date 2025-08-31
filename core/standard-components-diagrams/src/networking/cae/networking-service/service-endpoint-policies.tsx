import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_ENDPOINT_POLICIES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Service_Endpoint_Policies.svg;strokeColor=none;',
  _width: 49,
  _height: 50,
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
