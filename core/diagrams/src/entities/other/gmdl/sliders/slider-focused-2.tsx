import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SLIDER_FOCUSED_2 = {
  _style: {
    entity:
      'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.sliderFocused;barPos=50;strokeColor=#3F51B5;opacity=100;strokeWidth=2;fillColor=#3F51B5;handleSize=30;shadow=0;html=1;',
  },
  _width: 200,
  _height: 30,
}

export function SliderFocused2(props: NodeProps) {
  return (
    <Shape
      {...SLIDER_FOCUSED_2}
      {...props}
      _style={extendStyle(SLIDER_FOCUSED_2, props)}
    />
  )
}
