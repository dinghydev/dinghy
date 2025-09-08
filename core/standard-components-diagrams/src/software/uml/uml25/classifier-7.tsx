import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLASSIFIER_7 = {
  _style: {
    group:
      'shape=ellipse;container=1;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;html=1;dashed=0;collapsible=0;',
  },
}

export function Classifier7(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLASSIFIER_7}
      {...props}
      _style={extendStyle(CLASSIFIER_7, props)}
    />
  )
}
