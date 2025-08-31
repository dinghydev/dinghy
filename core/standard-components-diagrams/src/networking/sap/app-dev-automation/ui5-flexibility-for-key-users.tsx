import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UI5_FLEXIBILITY_FOR_KEY_USERS = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=UI5_flexibility_for_key_users',
  },
  _width: 60,
  _height: 60,
}

export function Ui5FlexibilityForKeyUsers(props: DiagramNodeProps) {
  return (
    <Shape
      {...UI5_FLEXIBILITY_FOR_KEY_USERS}
      {...props}
      _style={extendStyle(UI5_FLEXIBILITY_FOR_KEY_USERS, props)}
    />
  )
}
