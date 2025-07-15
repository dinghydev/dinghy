import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_TAPE_LIBRARY = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.virtual_tape_library;fillColor=#E05243;gradientColor=none;',
  _width: 60,
  _height: 73.5,
}

export function VirtualTapeLibrary(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_TAPE_LIBRARY} {...props} />
}
