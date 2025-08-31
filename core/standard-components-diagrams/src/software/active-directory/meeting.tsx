import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEETING = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/meeting.svg;strokeColor=none;',
  _width: 50,
  _height: 45.5,
}

export function Meeting(props: DiagramNodeProps) {
  return <Shape {...MEETING} {...props} _style={extendStyle(MEETING, props)} />
}
