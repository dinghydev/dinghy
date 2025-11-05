import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IDENTITY_DIRECTORY_2 = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Identity_Directory',
  },
  _original_width: 50,
  _original_height: 50,
}

export function IdentityDirectory2(props: NodeProps) {
  return (
    <Shape
      {...IDENTITY_DIRECTORY_2}
      {...props}
      _style={extendStyle(IDENTITY_DIRECTORY_2, props)}
    />
  )
}
