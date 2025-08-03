import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVICE_ENDPOINT_POLICIES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Service_Endpoint_Policies.svg;strokeColor=none;',
  _width: 62,
  _height: 64,
}

export function ServiceEndpointPolicies(props: DiagramNodeProps) {
  return <Shape {...SERVICE_ENDPOINT_POLICIES} {...props} />
}
