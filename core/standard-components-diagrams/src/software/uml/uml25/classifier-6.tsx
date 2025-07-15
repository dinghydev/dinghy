import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLASSIFIER_6 = {
  _style: {
    group:
      'shape=ellipse;container=1;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;html=1;dashed=1;collapsible=0;',
  },
}

export function Classifier6(props: DiagramNodeProps) {
  return <Shape {...CLASSIFIER_6} {...props} />
}
