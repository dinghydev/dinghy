import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLASSIFIER_6 = {
  _style: {
    container:
      'shape=ellipse;container=1;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;html=1;dashed=1;collapsible=0;',
  },
}

export function Classifier6(props: NodeProps) {
  return (
    <Shape
      {...CLASSIFIER_6}
      {...props}
      _style={extendStyle(CLASSIFIER_6, props)}
    />
  )
}
