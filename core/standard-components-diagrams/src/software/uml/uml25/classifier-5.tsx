import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLASSIFIER_5 = {
  _style:
    'swimlane;fontStyle=0;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=40;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;html=1;whiteSpace=wrap;',
  _width: 0,
  _height: 70,
}

export function Classifier5(props: DiagramNodeProps) {
  return <Shape {...CLASSIFIER_5} {...props} />
}
