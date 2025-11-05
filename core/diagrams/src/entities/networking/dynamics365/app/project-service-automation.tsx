import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROJECT_SERVICE_AUTOMATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ProjectServiceAutomation.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 63.480000000000004,
}

export function ProjectServiceAutomation(props: NodeProps) {
  return (
    <Shape
      {...PROJECT_SERVICE_AUTOMATION}
      {...props}
      _style={extendStyle(PROJECT_SERVICE_AUTOMATION, props)}
    />
  )
}
