import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARRAY_MANAGER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.array_manager;',
  },
  _width: 50,
  _height: 36.5,
}

export function ArrayManager(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARRAY_MANAGER)} />
}
