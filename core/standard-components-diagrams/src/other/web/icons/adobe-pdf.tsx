import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ADOBE_PDF = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.adobe_pdf;fillColor=#F40C0C;gradientColor=#610603',
  _width: 102.4,
  _height: 102.4,
}

export function AdobePdf(props: DiagramNodeProps) {
  return <Shape {...ADOBE_PDF} {...props} />
}
