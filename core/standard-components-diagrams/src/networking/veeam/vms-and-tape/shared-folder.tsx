import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHARED_FOLDER = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.shared_folder;',
  _width: 55.2,
  _height: 64,
}

export function SharedFolder(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHARED_FOLDER}
      {...props}
      _style={extendStyle(SHARED_FOLDER, props)}
    />
  )
}
