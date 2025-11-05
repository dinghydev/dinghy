import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOH_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.servers.moh_server;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 43,
  _original_height: 62,
}

export function MohServer(props: NodeProps) {
  return (
    <Shape {...MOH_SERVER} {...props} _style={extendStyle(MOH_SERVER, props)} />
  )
}
