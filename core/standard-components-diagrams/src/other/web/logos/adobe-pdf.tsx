import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ADOBE_PDF = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.adobe_pdf;fillColor=#A60908',
  },
  _original_width: 69.4,
  _original_height: 67.60000000000001,
}

export function AdobePdf(props: DiagramNodeProps) {
  return (
    <Shape {...ADOBE_PDF} {...props} _style={extendStyle(ADOBE_PDF, props)} />
  )
}
