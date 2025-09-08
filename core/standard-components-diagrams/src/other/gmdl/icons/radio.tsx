import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RADIO = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.radio;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  },
  _original_width: 20,
  _original_height: 20,
}

export function Radio(props: DiagramNodeProps) {
  return <Shape {...RADIO} {...props} _style={extendStyle(RADIO, props)} />
}
