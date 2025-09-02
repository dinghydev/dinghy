import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLDER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.folder;',
  },
  _original_width: 55.2,
  _original_height: 51.2,
}

export function Folder(props: DiagramNodeProps) {
  return <Shape {...FOLDER} {...props} _style={extendStyle(FOLDER, props)} />
}
