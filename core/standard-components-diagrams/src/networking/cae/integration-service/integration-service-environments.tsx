import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTEGRATION_SERVICE_ENVIRONMENTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Integration_Service_Environments.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function IntegrationServiceEnvironments(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTEGRATION_SERVICE_ENVIRONMENTS}
      {...props}
      _style={extendStyle(INTEGRATION_SERVICE_ENVIRONMENTS, props)}
    />
  )
}
