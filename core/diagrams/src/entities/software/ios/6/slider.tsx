import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SLIDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iSlider;barPos=20;',
  },
  _width: 150,
  _height: 10,
}

export function Slider(props: NodeProps) {
  return <Shape {...SLIDER} {...props} _style={extendStyle(SLIDER, props)} />
}
