import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOCUMENT_INFORMATION_EXTRACTION = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Document_Information_Extraction',
  _width: 50,
  _height: 50,
}

export function DocumentInformationExtraction(props: DiagramNodeProps) {
  return <Shape {...DOCUMENT_INFORMATION_EXTRACTION} {...props} />
}
