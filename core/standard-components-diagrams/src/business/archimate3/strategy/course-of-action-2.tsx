import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COURSE_OF_ACTION_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.course;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function CourseOfAction2(props: DiagramNodeProps) {
  return (
    <Shape
      {...COURSE_OF_ACTION_2}
      {...props}
      _style={extendStyle(COURSE_OF_ACTION_2, props)}
    />
  )
}
