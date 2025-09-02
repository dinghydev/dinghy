import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OAUTH_2_0 = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=OAuth_20',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Oauth20(props: DiagramNodeProps) {
  return (
    <Shape {...OAUTH_2_0} {...props} _style={extendStyle(OAUTH_2_0, props)} />
  )
}
