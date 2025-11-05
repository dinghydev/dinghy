import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INJECTOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.injector;',
  },
  _width: 80,
  _height: 40,
}

export function Injector(props: NodeProps) {
  return (
    <Shape {...INJECTOR} {...props} _style={extendStyle(INJECTOR, props)} />
  )
}
