import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COURSE_OF_ACTION_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.course;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function CourseOfAction2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COURSE_OF_ACTION_2)} />
}
