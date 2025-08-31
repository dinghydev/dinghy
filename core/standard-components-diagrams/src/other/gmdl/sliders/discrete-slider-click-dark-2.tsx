import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISCRETE_SLIDER_CLICK_DARK_2 = {
  _style:
    'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.sliderDiscreteDots;barPos=60;bright=0;strokeColor=#0F9D58;opacity=100;strokeWidth=2;fillColor=#0F9D58;handleSize=10;shadow=0;fontSize=12;fontColor=#ffffff;html=1;',
  _width: 200,
  _height: 45,
}

export function DiscreteSliderClickDark2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISCRETE_SLIDER_CLICK_DARK_2}
      {...props}
      _style={extendStyle(DISCRETE_SLIDER_CLICK_DARK_2, props)}
    />
  )
}
