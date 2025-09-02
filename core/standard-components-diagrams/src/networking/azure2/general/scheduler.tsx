import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCHEDULER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Scheduler.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Scheduler(props: DiagramNodeProps) {
  return (
    <Shape {...SCHEDULER} {...props} _style={extendStyle(SCHEDULER, props)} />
  )
}
