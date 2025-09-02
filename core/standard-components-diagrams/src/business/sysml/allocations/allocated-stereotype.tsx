import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALLOCATED_STEREOTYPE = {
  _style: {
    entity:
      'fontStyle=1;align=center;verticalAlign=middle;childLayout=stackLayout;horizontal=1;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;marginBottom=0;',
  },
  _original_width: 0,
  _original_height: 60,
}

export function AllocatedStereotype(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALLOCATED_STEREOTYPE}
      {...props}
      _style={extendStyle(ALLOCATED_STEREOTYPE, props)}
    />
  )
}
