import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOVE_TO_FOLDER = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.move_to_folder;',
  },
  _width: 30,
  _height: 22.5,
}

export function MoveToFolder(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOVE_TO_FOLDER}
      {...props}
      _style={extendStyle(MOVE_TO_FOLDER, props)}
    />
  )
}
