import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SLIDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iSlider;barPos=20;',
  },
  _original_width: 150,
  _original_height: 10,
}

export function Slider(props: DiagramNodeProps) {
  return <Shape {...SLIDER} {...props} _style={extendStyle(SLIDER, props)} />
}
