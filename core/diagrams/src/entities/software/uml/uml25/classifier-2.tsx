import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLASSIFIER_2 = {
  _style: {
    entity:
      'shape=process2;fixedSize=1;size=5;fontStyle=1;html=1;whiteSpace=wrap;',
  },
  _width: 140,
  _height: 40,
}

export function Classifier2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CLASSIFIER_2)} />
}
