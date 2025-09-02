import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLDERS_2 = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.folders_2;',
  },
  _original_width: 30,
  _original_height: 22.5,
}

export function Folders2(props: DiagramNodeProps) {
  return (
    <Shape {...FOLDERS_2} {...props} _style={extendStyle(FOLDERS_2, props)} />
  )
}
