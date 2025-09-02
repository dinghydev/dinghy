import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLDERS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.folders;',
  },
  _original_width: 78,
  _original_height: 71,
}

export function Folders(props: DiagramNodeProps) {
  return <Shape {...FOLDERS} {...props} _style={extendStyle(FOLDERS, props)} />
}
