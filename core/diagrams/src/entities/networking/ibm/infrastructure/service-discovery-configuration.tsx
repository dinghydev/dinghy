import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVICE_DISCOVERY_CONFIGURATION = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/infrastructure/service_discovery_configuration.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function ServiceDiscoveryConfiguration(props: NodeProps) {
  return (
    <Shape
      {...SERVICE_DISCOVERY_CONFIGURATION}
      {...props}
      _style={extendStyle(SERVICE_DISCOVERY_CONFIGURATION, props)}
    />
  )
}
