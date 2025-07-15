import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COURSE_OF_ACTION_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.course;',
  _width: 40,
  _height: 40,
}

export function CourseOfAction2(props: DiagramNodeProps) {
  return <Shape {...COURSE_OF_ACTION_2} {...props} />
}
