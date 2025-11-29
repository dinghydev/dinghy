import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONFIGURATION_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/devops/configuration_management.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function ConfigurationManagement(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CONFIGURATION_MANAGEMENT)} />
  )
}
