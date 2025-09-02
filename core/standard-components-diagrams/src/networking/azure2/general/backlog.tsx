import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BACKLOG = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Backlog.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60,
}

export function Backlog(props: DiagramNodeProps) {
  return <Shape {...BACKLOG} {...props} _style={extendStyle(BACKLOG, props)} />
}
