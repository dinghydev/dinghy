import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLASSIFIER_3 = {
  _style: {
    entity:
      'swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;html=1;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 183,
}

export function Classifier3(props: NodeProps) {
  return (
    <Shape
      {...CLASSIFIER_3}
      {...props}
      _style={extendStyle(CLASSIFIER_3, props)}
    />
  )
}
