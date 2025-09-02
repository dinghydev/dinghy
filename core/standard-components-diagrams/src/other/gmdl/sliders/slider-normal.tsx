import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SLIDER_NORMAL = {
  _style: {
    entity:
      'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.slider2;barPos=0;strokeColor=#bbbbbb;opacity=100;strokeWidth=2;handleSize=10;shadow=0;html=1;',
  },
  _original_width: 200,
  _original_height: 10,
}

export function SliderNormal(props: DiagramNodeProps) {
  return (
    <Shape
      {...SLIDER_NORMAL}
      {...props}
      _style={extendStyle(SLIDER_NORMAL, props)}
    />
  )
}
