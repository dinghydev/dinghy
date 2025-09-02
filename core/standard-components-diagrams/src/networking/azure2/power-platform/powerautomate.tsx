import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWERAUTOMATE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/PowerAutomate.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 53.839999999999996,
}

export function Powerautomate(props: DiagramNodeProps) {
  return (
    <Shape
      {...POWERAUTOMATE}
      {...props}
      _style={extendStyle(POWERAUTOMATE, props)}
    />
  )
}
