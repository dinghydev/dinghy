import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLASSIFIER = {
  _style: {
    entity:
      'swimlane;fontStyle=0;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=55;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;html=1;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 183,
}

export function Classifier(props: DiagramNodeProps) {
  return (
    <Shape {...CLASSIFIER} {...props} _style={extendStyle(CLASSIFIER, props)} />
  )
}
