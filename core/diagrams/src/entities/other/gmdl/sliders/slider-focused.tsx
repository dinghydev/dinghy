import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SLIDER_FOCUSED = {
  _style: {
    entity:
      'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.sliderFocused;barPos=0;strokeColor=#bbbbbb;opacity=100;strokeWidth=2;handleSize=30;shadow=0;html=1;',
  },
  _width: 200,
  _height: 30,
}

export function SliderFocused(props: NodeProps) {
  return (
    <Shape
      {...SLIDER_FOCUSED}
      {...props}
      _style={extendStyle(SLIDER_FOCUSED, props)}
    />
  )
}
