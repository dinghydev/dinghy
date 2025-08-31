import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TARGETS_MANAGEMENT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Targets_Management.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
