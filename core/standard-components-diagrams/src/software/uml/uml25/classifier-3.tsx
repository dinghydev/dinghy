import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLASSIFIER_3 = {
  _style: {
    entity:
      'swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;html=1;whiteSpace=wrap;',
  },
  _original_width: 0,
  _original_height: 183,
}

export function Classifier3(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLASSIFIER_3}
      {...props}
      _style={extendStyle(CLASSIFIER_3, props)}
    />
  )
}
