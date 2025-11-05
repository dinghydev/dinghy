import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION_GENERIC = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.app_generic',
  },
  _width: 50,
  _height: 39,
}

export function ApplicationGeneric(props: NodeProps) {
  return (
    <Shape
      {...APPLICATION_GENERIC}
      {...props}
      _style={extendStyle(APPLICATION_GENERIC, props)}
    />
  )
}
