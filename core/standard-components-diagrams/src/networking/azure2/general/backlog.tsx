import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BACKLOG = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Backlog.svg;',
  _width: 68,
  _height: 60,
}

export function Backlog(props: DiagramNodeProps) {
  return <Shape {...BACKLOG} {...props} />
}
