import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IDENTITY_AUTHENTICATION = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Identity_Authentication2',
  },
  _original_width: 50,
  _original_height: 50,
}

export function IdentityAuthentication(props: NodeProps) {
  return (
    <Shape
      {...IDENTITY_AUTHENTICATION}
      {...props}
      _style={extendStyle(IDENTITY_AUTHENTICATION, props)}
    />
  )
}
