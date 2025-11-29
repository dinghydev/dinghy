import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FOLDERS_2 = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.folders_2;',
  },
  _width: 30,
  _height: 22.5,
}

export function Folders2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FOLDERS_2)} />
}
