import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TWO_CARDS = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFDFDF;html=1;whiteSpace=wrap;fillColor=#FFFFFF;fontColor=#000000;align=left;verticalAlign=top;spacing=20;fontSize=14;',
  },
  _original_width: 0,
  _original_height: 190,
}

export function TwoCards(props: DiagramNodeProps) {
  return (
    <Shape {...TWO_CARDS} {...props} _style={extendStyle(TWO_CARDS, props)} />
  )
}
