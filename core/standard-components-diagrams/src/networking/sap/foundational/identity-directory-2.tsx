import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IDENTITY_DIRECTORY_2 = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Identity_Directory',
  _width: 60,
  _height: 60,
}

export function IdentityDirectory2(props: DiagramNodeProps) {
  return (
    <Shape
      {...IDENTITY_DIRECTORY_2}
      {...props}
      _style={extendStyle(IDENTITY_DIRECTORY_2, props)}
    />
  )
}
