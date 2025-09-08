import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOGIC_APPS_2 = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Logic_Apps.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 52,
}

export function LogicApps2(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOGIC_APPS_2}
      {...props}
      _style={extendStyle(LOGIC_APPS_2, props)}
    />
  )
}
