import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PBX_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.pbx_server;',
  },
  _width: 65,
  _height: 85,
}

export function PbxServer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PBX_SERVER)} />
}
