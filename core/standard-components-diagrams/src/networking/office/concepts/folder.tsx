import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLDER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.folder;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function Folder(props: DiagramNodeProps) {
  return <Shape {...FOLDER} {...props} _style={extendStyle(FOLDER, props)} />
}
