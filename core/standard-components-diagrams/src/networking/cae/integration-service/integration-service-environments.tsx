import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTEGRATION_SERVICE_ENVIRONMENTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Integration_Service_Environments.svg;',
  _width: 50,
  _height: 50,
}

export function IntegrationServiceEnvironments(props: DiagramNodeProps) {
  return <Shape {...INTEGRATION_SERVICE_ENVIRONMENTS} {...props} />
}
