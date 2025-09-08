import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MULTI_FACTOR_AUTHENTICATION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.multi_factor_authentication;pointerEvents=1;',
  },
  _original_width: 25,
  _original_height: 50,
}

export function MultiFactorAuthentication(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTI_FACTOR_AUTHENTICATION}
      {...props}
      _style={extendStyle(MULTI_FACTOR_AUTHENTICATION, props)}
    />
  )
}
