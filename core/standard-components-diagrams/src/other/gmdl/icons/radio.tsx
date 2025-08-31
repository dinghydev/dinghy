import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RADIO = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.radio;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  },
  _width: 20,
  _height: 20,
}

export function Radio(props: DiagramNodeProps) {
  return <Shape {...RADIO} {...props} _style={extendStyle(RADIO, props)} />
}
