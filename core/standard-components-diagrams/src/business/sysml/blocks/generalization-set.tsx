import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERALIZATION_SET = {
  _style:
    'ellipse;html=1;fillColor=strokeColor;labelPosition=center;align=center;fontFamily=Helvetica;fontSize=11;fontColor=default;verticalAlign=top;verticalLabelPosition=bottom;',
  _width: 140,
  _height: 50,
}

export function GeneralizationSet(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERALIZATION_SET}
      {...props}
      _style={extendStyle(GENERALIZATION_SET, props)}
    />
  )
}
