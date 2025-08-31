import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IDENTITY_AUTHENTICATION = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Identity_Authentication2',
  _width: 60,
  _height: 60,
}

export function IdentityAuthentication(props: DiagramNodeProps) {
  return (
    <Shape
      {...IDENTITY_AUTHENTICATION}
      {...props}
      _style={extendStyle(IDENTITY_AUTHENTICATION, props)}
    />
  )
}
