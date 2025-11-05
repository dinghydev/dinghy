import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOCUMENT_INFORMATION_EXTRACTION = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Document_Information_Extraction',
  },
  _original_width: 50,
  _original_height: 50,
}

export function DocumentInformationExtraction(props: NodeProps) {
  return (
    <Shape
      {...DOCUMENT_INFORMATION_EXTRACTION}
      {...props}
      _style={extendStyle(DOCUMENT_INFORMATION_EXTRACTION, props)}
    />
  )
}
