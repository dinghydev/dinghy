import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DISCRETE_SLIDER_DISABLED = {
  _style: {
    entity:
      'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.sliderDisabled2;strokeColor=#b0b0b0;strokeWidth=2;fillColor=#b0b0b0;handleSize=6;shadow=0;hPos=0;html=1;',
  },
  _original_width: 200,
  _original_height: 20,
}

export function DiscreteSliderDisabled(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISCRETE_SLIDER_DISABLED}
      {...props}
      _style={extendStyle(DISCRETE_SLIDER_DISABLED, props)}
    />
  )
}
