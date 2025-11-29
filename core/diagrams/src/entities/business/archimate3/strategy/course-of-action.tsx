import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COURSE_OF_ACTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.application;appType=course;archiType=rounded;',
  },
  _width: 150,
  _height: 75,
}

export function CourseOfAction(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COURSE_OF_ACTION)} />
}
