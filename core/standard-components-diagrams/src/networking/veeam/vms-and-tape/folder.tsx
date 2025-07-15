import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FOLDER = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.folder;',
  _width: 55.2,
  _height: 51.2,
}

export function Folder(props: DiagramNodeProps) {
  return <Shape {...FOLDER} {...props} />
}
