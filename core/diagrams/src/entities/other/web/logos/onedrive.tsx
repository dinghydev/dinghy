import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ONEDRIVE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.onedrive;fillColor=#094AB1;strokeColor=none',
  },
  _width: 71.2,
  _height: 43.2,
}

export function Onedrive(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ONEDRIVE)} />
}
