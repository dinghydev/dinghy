import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTIVE_DIRECTORY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.active_directory;',
  _width: 53,
  _height: 46,
}

export function ActiveDirectory(props: DiagramNodeProps) {
  return <Shape {...ACTIVE_DIRECTORY} {...props} />
}
