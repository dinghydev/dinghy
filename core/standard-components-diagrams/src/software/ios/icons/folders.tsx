import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLDERS = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.folders;',
  },
  _width: 30,
  _height: 25.5,
}

export function Folders(props: DiagramNodeProps) {
  return <Shape {...FOLDERS} {...props} _style={extendStyle(FOLDERS, props)} />
}
