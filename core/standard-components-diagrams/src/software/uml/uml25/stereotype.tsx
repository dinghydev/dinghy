import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STEREOTYPE = {
  _style: {
    container:
      'shape=note2;size=25;childLayout=stackLayout;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;html=1;container=1;',
  },
}

export function Stereotype(props: DiagramNodeProps) {
  return (
    <Shape {...STEREOTYPE} {...props} _style={extendStyle(STEREOTYPE, props)} />
  )
}
