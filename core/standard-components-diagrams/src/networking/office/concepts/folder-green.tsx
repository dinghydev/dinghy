import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLDER_GREEN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.folder;fillColor=#7FBA42;',
  },
  _width: 50,
  _height: 45,
}

export function FolderGreen(props: DiagramNodeProps) {
  return (
    <Shape
      {...FOLDER_GREEN}
      {...props}
      _style={extendStyle(FOLDER_GREEN, props)}
    />
  )
}
