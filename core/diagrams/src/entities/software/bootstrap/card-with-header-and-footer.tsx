import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CARD_WITH_HEADER_AND_FOOTER = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFDFDF;html=1;whiteSpace=wrap;fillColor=#FFFFFF;fontColor=#000000;',
  },
  _width: 0,
  _height: 190,
}

export function CardWithHeaderAndFooter(props: DiagramNodeProps) {
  return (
    <Shape
      {...CARD_WITH_HEADER_AND_FOOTER}
      {...props}
      _style={extendStyle(CARD_WITH_HEADER_AND_FOOTER, props)}
    />
  )
}
