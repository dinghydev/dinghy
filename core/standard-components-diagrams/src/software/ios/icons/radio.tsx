import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RADIO = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.radio;',
  },
  _original_width: 30,
  _original_height: 22.5,
}

export function Radio(props: DiagramNodeProps) {
  return <Shape {...RADIO} {...props} _style={extendStyle(RADIO, props)} />
}
