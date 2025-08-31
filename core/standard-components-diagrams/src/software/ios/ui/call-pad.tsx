import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CALL_PAD = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.call_pad;sketch=0;',
  },
  _width: 140,
  _height: 160,
}

export function CallPad(props: DiagramNodeProps) {
  return (
    <Shape {...CALL_PAD} {...props} _style={extendStyle(CALL_PAD, props)} />
  )
}
