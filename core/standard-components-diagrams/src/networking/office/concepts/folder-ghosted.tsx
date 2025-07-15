import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FOLDER_GHOSTED = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.folder;fillColor=#CCCBCB;',
  _width: 50,
  _height: 45,
}

export function FolderGhosted(props: DiagramNodeProps) {
  return <Shape {...FOLDER_GHOSTED} {...props} />
}
