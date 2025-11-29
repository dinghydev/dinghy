import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DROPBOX2 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.dropbox;fillColor=#0287EA',
  },
  _original_width: 73.4,
  _original_height: 62,
}

export function Dropbox2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DROPBOX2)} />
}
