import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ADOBE_PDF = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.adobe_pdf;fillColor=#F40C0C;gradientColor=#610603',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function AdobePdf(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ADOBE_PDF)} />
}
