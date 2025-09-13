import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SLIDER = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios7ui.slider;barPos=20;strokeColor=#0080f0;strokeColor2=#a0a0a0;',
  },
  _width: 150,
  _height: 15,
}

export function Slider(props: DiagramNodeProps) {
  return <Shape {...SLIDER} {...props} _style={extendStyle(SLIDER, props)} />
}
