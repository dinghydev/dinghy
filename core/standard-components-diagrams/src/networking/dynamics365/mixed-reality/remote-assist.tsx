import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REMOTE_ASSIST = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/RemoteAssist.svg;',
  _width: 60.12,
  _height: 68,
}

export function RemoteAssist(props: DiagramNodeProps) {
  return <Shape {...REMOTE_ASSIST} {...props} />
}
