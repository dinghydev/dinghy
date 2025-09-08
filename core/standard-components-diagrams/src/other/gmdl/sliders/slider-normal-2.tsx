import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SLIDER_NORMAL_2 = {
  _style: {
    entity:
      'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.slider2;barPos=50;strokeColor=#3F51B5;opacity=100;strokeWidth=2;fillColor=#3F51B5;handleSize=10;shadow=0;html=1;',
  },
  _original_width: 200,
  _original_height: 10,
}

export function SliderNormal2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SLIDER_NORMAL_2}
      {...props}
      _style={extendStyle(SLIDER_NORMAL_2, props)}
    />
  )
}
