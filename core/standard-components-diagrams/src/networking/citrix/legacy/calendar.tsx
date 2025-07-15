import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CALENDAR = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.calendar;',
  _width: 75,
  _height: 100,
}

export function Calendar(props: DiagramNodeProps) {
  return <Shape {...CALENDAR} {...props} />
}
