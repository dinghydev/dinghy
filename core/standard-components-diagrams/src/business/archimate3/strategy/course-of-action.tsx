import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COURSE_OF_ACTION = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.application;appType=course;archiType=rounded;',
  _width: 150,
  _height: 75,
}

export function CourseOfAction(props: DiagramNodeProps) {
  return <Shape {...COURSE_OF_ACTION} {...props} />
}
