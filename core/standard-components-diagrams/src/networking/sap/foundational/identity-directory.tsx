import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IDENTITY_DIRECTORY = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Identity_Directory2',
  _width: 50,
  _height: 50,
}

export function IdentityDirectory(props: DiagramNodeProps) {
  return <Shape {...IDENTITY_DIRECTORY} {...props} />
}
