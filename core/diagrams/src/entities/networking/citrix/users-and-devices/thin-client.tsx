import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const THIN_CLIENT = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.thin_client;',
  },
  _width: 36.565,
  _height: 50,
}

export function ThinClient(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, THIN_CLIENT)} />
}
