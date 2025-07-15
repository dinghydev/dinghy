import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIST_LIBRARY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.list_library;',
  _width: 52,
  _height: 48,
}

export function ListLibrary(props: DiagramNodeProps) {
  return <Shape {...LIST_LIBRARY} {...props} />
}
