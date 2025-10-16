import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARCHIVE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.archive;',
  },
  _width: 35,
  _height: 55,
}

export function Archive(props: DiagramNodeProps) {
  return <Shape {...ARCHIVE} {...props} _style={extendStyle(ARCHIVE, props)} />
}
