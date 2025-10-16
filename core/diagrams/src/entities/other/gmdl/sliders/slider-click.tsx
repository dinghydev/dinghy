import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SLIDER_CLICK = {
  _style: {
    entity:
      'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.slider2;barPos=0;strokeColor=#bbbbbb;opacity=100;strokeWidth=2;handleSize=20;shadow=0;html=1;',
  },
  _width: 200,
  _height: 20,
}

export function SliderClick(props: DiagramNodeProps) {
  return (
    <Shape
      {...SLIDER_CLICK}
      {...props}
      _style={extendStyle(SLIDER_CLICK, props)}
    />
  )
}
