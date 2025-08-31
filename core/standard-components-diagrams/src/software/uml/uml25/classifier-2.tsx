import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLASSIFIER_2 = {
  _style:
    'shape=process2;fixedSize=1;size=5;fontStyle=1;html=1;whiteSpace=wrap;',
  _width: 140,
  _height: 40,
}

export function Classifier2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLASSIFIER_2}
      {...props}
      _style={extendStyle(CLASSIFIER_2, props)}
    />
  )
}
