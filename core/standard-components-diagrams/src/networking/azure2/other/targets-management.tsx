import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TARGETS_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Targets_Management.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function TargetsManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...TARGETS_MANAGEMENT}
      {...props}
      _style={extendStyle(TARGETS_MANAGEMENT, props)}
    />
  )
}
