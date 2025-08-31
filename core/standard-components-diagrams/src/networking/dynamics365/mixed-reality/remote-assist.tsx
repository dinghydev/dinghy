import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REMOTE_ASSIST = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/RemoteAssist.svg;strokeColor=none;',
  },
  _width: 60.12,
  _height: 68,
}

export function RemoteAssist(props: DiagramNodeProps) {
  return (
    <Shape
      {...REMOTE_ASSIST}
      {...props}
      _style={extendStyle(REMOTE_ASSIST, props)}
    />
  )
}
