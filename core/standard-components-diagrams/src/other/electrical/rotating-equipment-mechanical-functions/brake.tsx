import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BRAKE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=trapezoid;perimeter=none;',
  },
  _original_width: 75,
  _original_height: 25,
}

export function Brake(props: DiagramNodeProps) {
  return <Shape {...BRAKE} {...props} _style={extendStyle(BRAKE, props)} />
}
