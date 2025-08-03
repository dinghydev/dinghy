import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTEGRATION_ENVIRONMENTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Integration_Environments.svg;strokeColor=none;',
  _width: 64.24,
  _height: 68,
}

export function IntegrationEnvironments(props: DiagramNodeProps) {
  return <Shape {...INTEGRATION_ENVIRONMENTS} {...props} />
}
