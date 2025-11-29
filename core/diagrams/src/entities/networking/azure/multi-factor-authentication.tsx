import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTI_FACTOR_AUTHENTICATION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.multi_factor_authentication;pointerEvents=1;',
  },
  _width: 25,
  _height: 50,
}

export function MultiFactorAuthentication(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, MULTI_FACTOR_AUTHENTICATION)}
    />
  )
}
