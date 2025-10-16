import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LAB_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/Lab_Services.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 64,
}

export function LabServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...LAB_SERVICES}
      {...props}
      _style={extendStyle(LAB_SERVICES, props)}
    />
  )
}
