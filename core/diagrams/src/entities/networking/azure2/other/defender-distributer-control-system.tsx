import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEFENDER_DISTRIBUTER_CONTROL_SYSTEM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Distributer_Control_System.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DefenderDistributerControlSystem(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_DISTRIBUTER_CONTROL_SYSTEM}
      {...props}
      _style={extendStyle(DEFENDER_DISTRIBUTER_CONTROL_SYSTEM, props)}
    />
  )
}
