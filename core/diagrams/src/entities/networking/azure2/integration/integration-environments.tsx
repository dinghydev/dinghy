import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTEGRATION_ENVIRONMENTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Integration_Environments.svg;strokeColor=none;',
  },
  _original_width: 64.24,
  _original_height: 68,
}

export function IntegrationEnvironments(props: NodeProps) {
  return (
    <Shape
      {...INTEGRATION_ENVIRONMENTS}
      {...props}
      _style={extendStyle(INTEGRATION_ENVIRONMENTS, props)}
    />
  )
}
