import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FOLDER_SHARED = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.folder_shared;',
  _width: 54,
  _height: 52,
}

export function FolderShared(props: DiagramNodeProps) {
  return <Shape {...FOLDER_SHARED} {...props} />
}
