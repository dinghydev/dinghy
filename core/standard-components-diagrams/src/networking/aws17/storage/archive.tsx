import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARCHIVE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.archive;fillColor=#E05243;gradientColor=none;',
  },
  _original_width: 57,
  _original_height: 75,
}

export function Archive(props: DiagramNodeProps) {
  return <Shape {...ARCHIVE} {...props} _style={extendStyle(ARCHIVE, props)} />
}
