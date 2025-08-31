import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLDERS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.folders;',
  },
  _width: 57,
  _height: 53,
}

export function Folders(props: DiagramNodeProps) {
  return <Shape {...FOLDERS} {...props} _style={extendStyle(FOLDERS, props)} />
}
