import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FILE_KEY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.file_key;',
  _width: 48,
  _height: 53,
}

export function FileKey(props: DiagramNodeProps) {
  return <Shape {...FILE_KEY} {...props} />
}
