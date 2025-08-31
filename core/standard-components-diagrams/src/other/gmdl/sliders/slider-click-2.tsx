import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SLIDER_CLICK_2 = {
  _style:
    'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.slider2;barPos=50;strokeColor=#3F51B5;opacity=100;strokeWidth=2;fillColor=#3F51B5;handleSize=20;shadow=0;html=1;',
  _width: 200,
  _height: 20,
}

export function SliderClick2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SLIDER_CLICK_2}
      {...props}
      _style={extendStyle(SLIDER_CLICK_2, props)}
    />
  )
}
