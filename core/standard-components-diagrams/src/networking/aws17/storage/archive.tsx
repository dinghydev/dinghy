import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARCHIVE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.archive;fillColor=#E05243;gradientColor=none;',
  _width: 57,
  _height: 75,
}

export function Archive(props: DiagramNodeProps) {
  return <Shape {...ARCHIVE} {...props} _style={extendStyle(ARCHIVE, props)} />
}
