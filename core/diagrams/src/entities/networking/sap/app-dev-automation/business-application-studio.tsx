import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUSINESS_APPLICATION_STUDIO = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Business_Application_Studio',
  },
  _original_width: 50,
  _original_height: 50,
}

export function BusinessApplicationStudio(props: NodeProps) {
  return (
    <Shape
      {...BUSINESS_APPLICATION_STUDIO}
      {...props}
      _style={extendStyle(BUSINESS_APPLICATION_STUDIO, props)}
    />
  )
}
