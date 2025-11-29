import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_SERVER = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.database_server',
  },
  _width: 38,
  _height: 50,
}

export function DatabaseServer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATABASE_SERVER)} />
}
