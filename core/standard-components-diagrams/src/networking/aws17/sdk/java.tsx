import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JAVA = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.android;fillColor=#EE472A;gradientColor=none;',
  },
  _original_width: 73.5,
  _original_height: 84,
}

export function Java(props: DiagramNodeProps) {
  return <Shape {...JAVA} {...props} _style={extendStyle(JAVA, props)} />
}
