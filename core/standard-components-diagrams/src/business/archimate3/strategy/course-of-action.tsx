import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COURSE_OF_ACTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.application;appType=course;archiType=rounded;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function CourseOfAction(props: DiagramNodeProps) {
  return (
    <Shape
      {...COURSE_OF_ACTION}
      {...props}
      _style={extendStyle(COURSE_OF_ACTION, props)}
    />
  )
}
