import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCH = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/switch.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Switch(props: DiagramNodeProps) {
  return <Shape {...SWITCH} {...props} _style={extendStyle(SWITCH, props)} />
}
