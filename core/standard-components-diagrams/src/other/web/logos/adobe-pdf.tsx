import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ADOBE_PDF = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.adobe_pdf;fillColor=#A60908',
  _width: 69.4,
  _height: 67.60000000000001,
}

export function AdobePdf(props: DiagramNodeProps) {
  return <Shape {...ADOBE_PDF} {...props} />
}
